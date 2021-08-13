using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace edTech.UI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        IWebHostEnvironment _env;
        public FileController(IWebHostEnvironment env)
        {
            _env = env;
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                var folderPath = "ClientApp/src/assets/images";
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderPath);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = "assets/images/" + fileName;

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpDelete]
        public IActionResult DeleteFile(string imageUrl)
        {
            //delete existing file
            if (System.IO.File.Exists(_env.WebRootPath + imageUrl))
            {
                System.IO.File.Delete(_env.WebRootPath + imageUrl);
                return Ok();
            }
            return NotFound();
        }
    }
}
