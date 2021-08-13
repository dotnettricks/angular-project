using edTech.Entities;
using System.Collections.Generic;


namespace edTech.Services.Interfaces
{
    public interface ICatalogService
    {
        IEnumerable<Category> GetCategories();
        IEnumerable<Course> GetCourses();
    }
}
