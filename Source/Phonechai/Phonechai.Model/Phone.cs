using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Phonechai.Model
{
    public class Phone : Entity
    {
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Cpu { get; set; }
        public string Camera { get; set; }
        public string Memory { get; set; }
        public string Size { get; set; }
        public string Resolution { get; set; }
        public double Price { get; set; }

    }
}
