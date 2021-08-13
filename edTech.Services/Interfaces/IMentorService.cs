using edTech.Entities;
using System.Collections.Generic;

namespace edTech.Services.Interfaces
{
    public interface IMentorService
    {
        IEnumerable<Mentor> GetMentors();
        Mentor GetMentor(int id);
        void AddMentor(Mentor mentor);
        void UpdateMentor(Mentor mentor);
        void DeleteMentor(int id);
    }
}
