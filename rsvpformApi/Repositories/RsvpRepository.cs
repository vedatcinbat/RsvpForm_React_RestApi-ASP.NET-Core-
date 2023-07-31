using RsvpForm.Models;
using Microsoft.EntityFrameworkCore;




namespace RsvpForm.Repositories {
    public class RsvpRepository : DbContext {
        public DbSet<Candidate> Candidate {get; set;}

        public RsvpRepository(DbContextOptions options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Candidate>()
            .HasData(
                new Candidate {Id = 1, FirstName = "Vedat", LastName = "Cinbat", Age = 21, Country = "Turkey", isComing = true},
                new Candidate{Id = 2, FirstName = "Jack", LastName = "Nickelson", Age = 26, Country = "United States", isComing = true},
                new Candidate{Id = 3, FirstName = "Oliver", LastName = "Blum", Age = 12, Country = "United Kingdom", isComing = false}
            );
        }
    }
}