using back_agenda_inteligente.Models;
using Microsoft.EntityFrameworkCore;

namespace back_agenda_inteligente.Data
{
    public class AgendaContext : DbContext
    {
        public AgendaContext(DbContextOptions<AgendaContext> options) : base(options) { }

        public DbSet<Compromisso> Compromissos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Compromisso>()
                .HasKey(e => e.Id);

        }
    }
}
