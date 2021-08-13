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
        IMentorService _mentorService;
        public MentorController(IMentorService mentorService)
        {
            _mentorService = mentorService;
        }

        [HttpGet]
        public IEnumerable<Mentor> GetMentors()
        {
            return _mentorService.GetMentors();
        }

        [HttpPost]
        public IActionResult AddMentor(Mentor model)
        {
            try
            {
                _mentorService.AddMentor(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
