import { WorldDB } from "./lib/WorldDB";

export const prefix = "-";
export const default_title = "§a玩家";
export const baseXP = 5;
export const levelFactor = 5;
export const chatFormat = `[§bLv.%level%§r][%title%§r]%player% §7>>§f %content%` //這裏的數據都是未來設定可更改的


export const checkLore = true
export const checkEnchantment = true


//database
export const pluginDB = new WorldDB("plugin_database");
export const enables = pluginDB.table("enable");