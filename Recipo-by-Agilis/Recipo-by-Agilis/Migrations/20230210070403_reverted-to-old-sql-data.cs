using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class revertedtooldsqldata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2e9d1034-a945-4643-874f-31527a5dd244");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72fe0072-af6f-4188-a6ed-bbf60f55fd6b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3a07559-32e0-4fe6-af9a-5f9a850cab5a");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Subscription");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Ingredients");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Category");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07c2d067-2af5-4a1f-bd14-dba9bd6cb586", "1", "Admin", "Admin" },
                    { "b4193792-d960-42e0-b664-7d933b5ab009", "3", "SubscribedUser", "SubscribedUser" },
                    { "ef04a834-d60e-4949-a282-005922b2f24e", "2", "FreeUser", "FreeUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07c2d067-2af5-4a1f-bd14-dba9bd6cb586");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4193792-d960-42e0-b664-7d933b5ab009");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ef04a834-d60e-4949-a282-005922b2f24e");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Subscription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Ingredients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2e9d1034-a945-4643-874f-31527a5dd244", "2", "FreeUser", "FreeUser" },
                    { "72fe0072-af6f-4188-a6ed-bbf60f55fd6b", "1", "Admin", "Admin" },
                    { "d3a07559-32e0-4fe6-af9a-5f9a850cab5a", "3", "SubscribedUser", "SubscribedUser" }
                });
        }
    }
}
