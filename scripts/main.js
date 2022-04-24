import { world } from "mojang-minecraft";
import { cmd, log, logfor } from './lib/GameLibrary.js';
import { sendMessage } from './system/chat.js'
import { AdminMenu } from "./mainMenu/admin.js";
import { PlayerMenu } from "./mainMenu/player.js";

world.events.beforeChat.subscribe(eventData => {
    eventData.cancel = true;
    const player = eventData.sender;
    const message = eventData.message;

    if (message == "-menu") {
        cmd(`give ${player.name} mcc:menu 1 0`);
    }

    if (message == "-menu2") {
        if ("admin" in player.getTags()) {
            cmd(`give ${player.name} mcc:admin_menu 1 0`);
        }
        else {
            logfor(player, '§c您沒有權限! 需要 "admin" Tag');
        }
    }

    sendMessage(player, message);
})

world.events.playerJoin.subscribe(eventData => {
    const player = eventData.player;

    /* 這個我先關閉 到時候再來討論或想想要做什麼 */
})

world.events.itemUse.subscribe(eventData => {
    let player = eventData.source;
    let item = eventData.item;

    if (item.id == "mcc:menu") PlayerMenu(player);
    else if (item.id == "mcc:admin_menu") AdminMenu(player);
})

