import { gql } from '@apollo/client';

export const GET_COUPLE_PROFILE = gql`
  query GetCoupleProfile {
    couple {
      id
      partnerA { id, name, avatar }
      partnerB { id, name, avatar }
      anniversary
      milestones { title, date }
    }
  }
`; 