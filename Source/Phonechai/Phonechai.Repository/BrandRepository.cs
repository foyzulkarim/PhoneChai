using Phonechai.Model;

namespace Phonechai.Repository
{
    public class BrandRepository : BaseRepository<Brand>
    {
        public BrandRepository(BusinessDbContext db) : base(db)
        {
        }
    }
}