using edTech.Entities;
using edTech.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace edTech.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        IService<Mentor> _mentorService;
        public MentorController(IService<Mentor> mentorService)
        {
            _mentorService = mentorService;
        }

        [HttpGet]
        public IEnumerable<Mentor> GetMentors()
        {
            return _mentorService.GetAll();
        }

        [HttpPost]
        public IActionResult AddMentor(Mentor model)
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
