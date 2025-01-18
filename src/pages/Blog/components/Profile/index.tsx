import { ExternalLink } from '@/components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { useState } from 'react'
// import { api } from '@/lib/axios'
import { Spinner } from '@/components/Spinner'
import { Building, GithubLogo, UsersThree } from '@phosphor-icons/react'

// const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>

              <ExternalLink
                text="Github"
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <GithubLogo size={32} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <Building size={32} />
                  {profileData.company}
                </li>
              )}
              <li>
                <UsersThree size={32} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}
