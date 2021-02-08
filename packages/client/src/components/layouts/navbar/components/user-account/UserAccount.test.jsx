import {
  render, screen, fireEvent, waitFor,
} from '@test-utils/CustomRender';
import AuthService from '@/services/AuthService';
import UserAccount from './UserAccount';

describe('Testing UserAccount', () => {
  it('Should userAccount button', () => {
    render(<UserAccount />);
    const userAccount = screen.getByRole('button', { name: /janusz kowalski/i });

    expect(userAccount).toBeInTheDocument();
  });
  it('Should render userAccount dropdown with all items', async () => {
    render(<UserAccount />);
    const userAccount = screen.getByRole('button', { name: /janusz kowalski/i });
    expect(userAccount).toBeInTheDocument();
    fireEvent.click(userAccount);
    await waitFor(() => {
      const profileItem = screen.getByRole('menuitem', { name: /profil/i });
      const settingsItem = screen.getByRole('menuitem', { name: /settings/i });
      const logOutItem = screen.getByRole('menuitem', { name: /wyloguj/i });
      expect(profileItem).toBeInTheDocument();
      expect(settingsItem).toBeInTheDocument();
      expect(logOutItem).toBeInTheDocument();
    });
  });
  it('Handles logOut', async () => {
    const AuthServiceSignUserSpy = jest.spyOn(AuthService, 'signOut');
    render(<UserAccount />);
    const userAccount = screen.getByRole('button', { name: /janusz kowalski/i });
    expect(userAccount).toBeInTheDocument();
    fireEvent.click(userAccount);
    await waitFor(() => {
      const logOutItem = screen.getByRole('menuitem', { name: /wyloguj/i });
      fireEvent.click(logOutItem);
    });
    await waitFor(() => {
      expect(AuthServiceSignUserSpy).toHaveBeenCalled();
      expect(window.location).toEqual('/');
      AuthServiceSignUserSpy.mockRestore();
    });
  });
});
