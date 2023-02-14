using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class changedrecipe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0839eb44-df95-4410-9d80-a7d83589992a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0c24afdb-77bf-42b4-bece-a27acbe1418c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c6750acd-03d1-44ed-a880-3472e648964a");

            migrationBuilder.AlterColumn<string>(
                name: "IsPremium",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "05d85dcd-e32c-48e3-bd51-c22a6f9ae7d0", "1", "Admin", "Admin" },
                    { "177d63ff-4e20-4c87-8a86-1c2fe360235d", "3", "SubscribedUser", "SubscribedUser" },
                    { "84c079b5-1384-4645-b0db-359cb96ffe94", "2", "FreeUser", "FreeUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "05d85dcd-e32c-48e3-bd51-c22a6f9ae7d0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "177d63ff-4e20-4c87-8a86-1c2fe360235d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84c079b5-1384-4645-b0db-359cb96ffe94");

            migrationBuilder.AlterColumn<bool>(
                name: "IsPremium",
                table: "Recipes",
                type: "bit",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0839eb44-df95-4410-9d80-a7d83589992a", "1", "Admin", "Admin" },
                    { "0c24afdb-77bf-42b4-bece-a27acbe1418c", "2", "FreeUser", "FreeUser" },
                    { "c6750acd-03d1-44ed-a880-3472e648964a", "3", "SubscribedUser", "SubscribedUser" }
                });
        }
    }
}
