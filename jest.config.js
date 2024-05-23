module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
    "**/__tests__/**/*.+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  preset: "ts-jest",
};
