import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the jealousy. Sting: the double meaning of "cold".
const setup = "I heard you tell the microwave you love it. I have kept your food safe for six years.";
const sting = "I am not angry. I am just cold.";
const line = setup + " " + sting;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
