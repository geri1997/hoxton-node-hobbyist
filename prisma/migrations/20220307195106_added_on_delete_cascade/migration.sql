-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserHobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hobbyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "UserHobby_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserHobby_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserHobby" ("hobbyId", "id", "userId") SELECT "hobbyId", "id", "userId" FROM "UserHobby";
DROP TABLE "UserHobby";
ALTER TABLE "new_UserHobby" RENAME TO "UserHobby";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
