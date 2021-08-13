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
        ICatalogService _catalogService;
        public CatalogController(ICatalogService catalogService)
        {
            _catalogService = catalogService;
        }

        [HttpGet]
        public IEnumerable<Course> GetCourses()
        {
            return _catalogService.GetCourses();
        }
    }
}
