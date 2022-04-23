import { v as e } from "./preact.f8a34c73.js";
import { ad as a } from "./index.3637aaf7.js";
const n = {};
(n[a.VERY_EASY.name] = "Beginner. Tier 1"),
  (n[a.EASY.name] = "Beginner. Tier 2"),
  (n[a.BELOW_INTERMEDIATE.name] = "Intermediate. Tier 1"),
  (n[a.INTERMEDIATE.name] = "Intermediate. Tier 2"),
  (n[a.UPPER_INTERMEDIATE.name] = "Intermediate. Tier 3"),
  (n[a.HARD.name] = "Advanced. Tier 1"),
  (n[a.VERY_HARD.name] = "Advanced. Tier 2"),
  (n[a.INSANE.name] = "Advanced. Tier 3");
const r = {};
(r[a.VERY_EASY.name] = "Very Easy"),
  (r[a.EASY.name] = "Easy"),
  (r[a.BELOW_INTERMEDIATE.name] = "Below Intermediate"),
  (r[a.INTERMEDIATE.name] = "Intermediate"),
  (r[a.UPPER_INTERMEDIATE.name] = "Upper Intermediate"),
  (r[a.HARD.name] = "Hard"),
  (r[a.VERY_HARD.name] = "Very Hard"),
  (r[a.INSANE.name] = "Master");
const t = (r) => {
  const { id: t, difficultyString: E, difficultyNA: i } = r;
  if (!E || i)
    return e("span", { className: "Cpf2jn", title: "Not calculated" });
  const m = a.forName(E),
    d = 5 * (a.indexOf(m) + 1);
  return e("span", {
    id: t,
    className: "Cpf12y",
    style: { "--diffSize": `${d}px` },
    title: ((A = E), n[A] || ""),
  });
  var A;
};
export { t };
//# sourceMappingURL=DifficultyIndicator.c7b5f0f9.js.map
