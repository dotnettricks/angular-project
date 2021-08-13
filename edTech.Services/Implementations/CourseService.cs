using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace edTech.Services.Implementations
{
    public class CourseService: ICourseService
    {
        private readonly IRepository<Course> _CourseRepo;
        public CourseService(IRepository<Course> CourseRepo)
        {
            _CourseRepo = CourseRepo;
        }
        public IEnumerable<Course> GetCourses()
        {
            return _CourseRepo.GetAll().OrderBy(Course => Course.CategoryId);
        }

        public void AddCourse(Course course)
        {
            _CourseRepo.Add(course);
            _CourseRepo.SaveChanges();
        }

        public Course GetCourse(int id)
        {
            return _CourseRepo.Find(id);
        }

        public void UpdateCourse(Course course)
        {
            _CourseRepo.Update(course);
            _CourseRepo.SaveChanges();
        }

        public void DeleteCourse(int id)
        {
            _CourseRepo.Delete(id);
            _CourseRepo.SaveChanges();
        }
    }
}
