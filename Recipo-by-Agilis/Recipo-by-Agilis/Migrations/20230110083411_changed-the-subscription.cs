using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class changedthesubscription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Subscription");

            migrationBuilder.DropColumn(
                name: "IsPremium",
                table: "Subscription");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Subscription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsPremium",
                table: "Subscription",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
