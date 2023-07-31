using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RsvpForm.Models;
using RsvpForm.Repositories;



namespace RsvpForm.Controllers
{
    [Route("api/rsvpform")]
    [ApiController]
    public class RsvpFormController : ControllerBase
    {

        private readonly RsvpRepository _context;
        public RsvpFormController(RsvpRepository context)
        {
            _context = context;
        }



        [HttpGet]
        public IActionResult getUsers()
        {
            var candidates = _context.Candidate.ToList();

            return Ok(candidates);
        }

        [HttpGet("{id}")]
        public IActionResult getOneUser(int id)
        {
            var candidate = _context.Candidate.Where(c => c.Id.Equals(id)).SingleOrDefault();
            return Ok(candidate);
        }

        /* [HttpGet("country/{country}")] // api/rsvpform/country/....
        public IActionResult getOneUserWithCountry(string country) {
            var candidates = _context.Candidate.Where(c => c.Country == country).ToList();
            return Ok(candidates);
        } */
        [HttpGet("country")]
        public IActionResult getOneUserWithCountry(string country)
        {
            var candidates = _context.Candidate.Where(c => c.Country == country).ToList();
            return Ok(candidates);
        }

        [HttpGet("filterage")] // api/rsvpform/filterage?minage=..
        public IActionResult filterAge(int minage) {
            var candidates = _context.Candidate.Where(c => c.Age >= minage).ToList();
            return Ok(candidates);
        }

        [HttpGet("isComing")]
        public IActionResult getUsersWhoIsComing(bool coming)
        {
            var candidates = _context.Candidate.Where(c => c.isComing == coming).ToList();
            return Ok(candidates);
        }

        [HttpPost]
        public IActionResult postNewCandidate([FromBody]Candidate candidate)
        {
            _context.Add(candidate);
            _context.SaveChanges();
            return Ok(candidate);
        }

        [HttpDelete("{id}")]
        public IActionResult delCandidate(int id)
        {
            var candidate = _context.Candidate.Where(c => c.Id.Equals(id)).SingleOrDefault();

            if (candidate == null)
            {
                return BadRequest("No valid id");
            }
            else
            {
                _context.Remove(candidate);
                _context.SaveChanges();
                return Ok(candidate);
            }

        }




    }
}