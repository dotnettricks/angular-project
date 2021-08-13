using edTech.Entities;
using edTech.Services.Models;
using System.Threading.Tasks;

namespace edTech.Services.Interfaces
{
    public interface IAuthenticationService
    {
        bool CreateUser(User user, string Password);
        Task<bool> SignOut();
        UserModel AuthenticateUser(string Username, string Password);
        User GetUser(string Username);
    }
}
