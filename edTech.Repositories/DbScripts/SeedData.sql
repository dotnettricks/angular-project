USE [edTech]
GO
SET IDENTITY_INSERT [dbo].[AspNetRoles] ON 
GO
INSERT [dbo].[AspNetRoles] ([Id], [Description], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (1, N'Administrator', N'Admin', N'ADMIN', N'8797979')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Description], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (2, N'End User', N'User', N'USER', N'8687686')
GO
SET IDENTITY_INSERT [dbo].[AspNetRoles] OFF
GO
SET IDENTITY_INSERT [dbo].[AspNetUsers] ON 
GO
INSERT [dbo].[AspNetUsers] ([Id], [Name], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (1, N'Admin', N'admin@gmail.com', N'ADMIN@GMAIL.COM', N'admin@gmail.com', N'ADMIN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEEXWrkZepgBnndxqFDHt3Z+iOWveX1IId/7AFTUB4HyulIKFP5ur4MurBd5cB0UhFg==', N'VH2CRVFFFLO7N2RWZBRAS3KJE2UVDKAJ', N'9dfd713d-d495-42ce-8943-69d7c8c891a3', N'9876543210', 0, 0, NULL, 1, 0)
GO
INSERT [dbo].[AspNetUsers] ([Id], [Name], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (2, N'User', N'user@gmail.com', N'USER@GMAIL.COM', N'user@gmail.com', N'USER@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEHBcRVvKWU5+ugcw8yAEQhUvuAc8o5qyKpIi1nG096mMjQh8/NaEhTIm1mmVOZQMWA==', N'X3PPXBZ5ZQVTDQAWTSKZIOHAM7DYSU6E', N'2cfc5922-24c7-44f8-9784-32021eacea0e', N'9876543210', 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[AspNetUsers] OFF
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (1, 1)
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (2, 2)
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 
GO
INSERT [dbo].[Categories] ([Id], [Name], [Description]) VALUES (1, N'Programming', N'Programming')
GO
INSERT [dbo].[Categories] ([Id], [Name], [Description]) VALUES (2, N'Cloud', N'Cloud')
GO
INSERT [dbo].[Categories] ([Id], [Name], [Description]) VALUES (3, N'Web Development', N'Web Development')
GO
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Courses] ON 
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (1, N'C# For Beginners', N'Learn C# from scratch by doing hands-on labs and building projects.', N'Learn C# ', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/csharp.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (2, N'JS For Beginners', N'Learn JavaScript from scratch by doing hands-on labs and building projects.', N'Learn JavaScript', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/javascript.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (3, N'Node.js For Beginners', N'Learn Node.js from scratch by doing hands-on labs and building projects.', N'Learn Node.js', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/node.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (4, N'Angular For Beginners', N'Learn Angular from scratch by doing hands-on labs and building projects.', N'Learn Angular', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/angular.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (5, N'React For Beginners', N'Learn React from scratch by doing hands-on labs and building projects.', N'Learn Angular', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/react.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Courses] ([Id], [Name], [Summary], [Description], [Sequence], [MentorId], [CourseBanner], [URL], [UnitPrice], [CategoryId], [DifficultyType], [CreatedDate], [UpdatedDate], [IsActive]) VALUES (6, N'Azure For Beginners', N'Learn Azure from scratch by doing hands-on labs and building projects.', N'Learn Azure', CAST(1.00 AS Decimal(18, 2)), 1, N'assets/images/azure.png', NULL, CAST(1000.00 AS Decimal(18, 2)), 1, 1, CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-12T00:00:00.0000000' AS DateTime2), 1)
GO
SET IDENTITY_INSERT [dbo].[Courses] OFF
GO
