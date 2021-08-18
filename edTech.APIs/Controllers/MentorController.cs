using edTech.Entities;
using edTech.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace edTech.APIs.Controllers
{
    [EnableCors("AllowAll")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        IService<Mentor> _mentorService;
        public MentorController(IService<Mentor> mentorService)
        {
            _mentorService = mentorService;
        }

        [HttpGet]
        public IEnumerable<Mentor> GetAll()
        {
            return _mentorService.GetAll();
        }

        [HttpPost]
        public IActionResult Add(Mentor model)
        {
            try
            {
                _mentorService.Add(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
