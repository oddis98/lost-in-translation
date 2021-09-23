const API_KEY =
  'qculjKQjXUX0uauq3T98kX4iDInwsNI3E0gvJffCy5WJa8GXRVbMLyd8aGaYqsAd';
const API_URL = 'https://noroff-api-oddalm.herokuapp.com';

export const LoginAPI = {
  /**
   *
   * @param {*} details is an object containing a username.
   * @returns the user from the database if user.ok === true, if not throws error.
   */
  async login(details) {
    try {
      const user = await fetch(
        `${API_URL}/translations?username=${details.username}`
      );

      if (!user.ok) {
        throw new Error('Could not retrieve user');
      }
      return await user.json();
    } catch (error) {
      console.error(error);
    }
  },

  /**
   *
   * @param {*} details is an object containing a username.
   * @returns a response 201 created if user.ok === true, if not throws error.
   */
  async register(details) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: details.username,
        translations: []
      })
    };

    try {
      const user = await fetch(`${API_URL}/translations`, requestOptions);

      if (!user.ok) {
        throw new Error('Could not create new user.');
      }

      return await user.json();
    } catch (error) {
      console.error(error);
    }
  },

  async updateTranslations(userId, translations) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: translations
      })
    };
    try {
      const response = await fetch(
        `${API_URL}/translations/${userId}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error('Could not update translation');
      }
    } catch (error) {
      console.error(error);
    }
  }
};
