using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace edTech.Services.Implementations
{
    public class CatalogService : ICatalogService
    {
        private readonly IRepository<Course> _CourseRepo;
        private readonly IRepository<Category> _categoryRepo;
        public CatalogService(IRepository<Course> CourseRepo, IRepository<Category> categoryRepo)
        {
            _CourseRepo = CourseRepo;
            _categoryRepo = categoryRepo;
        }

        public IEnumerable<Course> GetCourses()
        {
            return _CourseRepo.GetAll().OrderBy(Course => Course.CategoryId);
        }

        public IEnumerable<Category> GetCategories()
        {
            return _categoryRepo.GetAll();
        }
    }
}