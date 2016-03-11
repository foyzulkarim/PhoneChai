using System.ComponentModel.DataAnnotations;

namespace Phonechai.Model
{
    public class Entity
    {
        [Key]        
        public string Id { get; set; }
    }
}