namespace Phonechai.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BrandAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Brands",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Country = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Brands");
        }
    }
}
