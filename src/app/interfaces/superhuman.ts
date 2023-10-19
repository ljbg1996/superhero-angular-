import { Weapon } from "./weapon";

export interface Superhuman {
  id?: number;
  name: string;
  strength?: number;
  intelligence?: number;
  power?: number;
  story?: string;
  healthMax?: number;
  shieldMax?: number;
  currentDamage?: number;
  powerType?: "WARRIOR";
  heroType?: "HERO";
  weapon?: Weapon
  dead?: boolean;
}
