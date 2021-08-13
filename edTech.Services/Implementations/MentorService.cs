using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace edTech.Services.Implementations
{
    public class MentorService : IMentorService
    {
        private readonly IRepository<Mentor> _MentorRepo;
        public MentorService(IRepository<Mentor> MentorRepo)
        {
            _MentorRepo = MentorRepo;
        }

        public void AddMentor(Mentor mentor)
        {
            _MentorRepo.Add(mentor);
            _MentorRepo.SaveChanges();
        }

        public void DeleteMentor(int id)
        {
            _MentorRepo.Delete(id);
            _MentorRepo.SaveChanges();
        }

        public Mentor GetMentor(int id)
        {
            return _MentorRepo.Find(id);
        }

        public IEnumerable<Mentor> GetMentors()
        {
            return _MentorRepo.GetAll().OrderBy(mentor => mentor.Id);
        }

        public void UpdateMentor(Mentor mentor)
        {
            _MentorRepo.Update(mentor);
            _MentorRepo.SaveChanges();
        }
    }
}
