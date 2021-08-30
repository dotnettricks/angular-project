using edTech.Entities;
using edTech.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace edTech.APIs.Controllers
{
    [EnableCors("AllowAll")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        ICourseService _courseService;
        public CatalogController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public IEnumerable<Course> GetAll()
        {
            return _courseService.GetAll();
        }

        [HttpGet("{Url}")]
        public Course GetCourseWithLessons(string Url)
        {
            Url = "/Courses/" + Url;
            return _courseService.GetCourseWithLessons(Url);
        }
    }
}
