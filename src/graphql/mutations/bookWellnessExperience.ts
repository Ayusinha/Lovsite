import { gql } from '@apollo/client';

export const BOOK_WELLNESS_EXPERIENCE = gql`
  mutation BookWellnessExperience($input: BookingInput!) {
    bookExperience(input: $input) {
      bookingId
      status
      confirmationDetails
    }
  }
`; 