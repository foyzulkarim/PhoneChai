using Phonechai.Model;
using Phonechai.Repository;

namespace Phonechai.Service
{
    public class BrandService : BaseService<Brand>
    {
        BrandRepository repository;

        public BrandService(BrandRepository repository) : base(repository)
        {

        }
    }
}