export type UserPreferences = {
  interests: string[];
  dietary: string;
  privacy: {
    showOnlineStatus: boolean;
    enableBiometric: boolean;
  };
};

export class User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: UserPreferences;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
    this.preferences = data.preferences;
  }

  // Example method: update preferences
  updatePreferences(newPrefs: Partial<UserPreferences>) {
    this.preferences = { ...this.preferences, ...newPrefs };
  }
} 