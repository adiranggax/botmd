import moment from "moment-timezone";

const CONNECTION = "pairing"; // qr atau pairing
const OWNER_NAME = "Renyoka";
const NOMOR_BOT = "6285825454160"; // 628xx nomor wa
const DESTINATION = "both"; // group , private, both
const APIKEY = ""; // apikey dari autoresbot.com (paket apikey)
const RATE_LIMIT = 3000; // 3 detik/chat
const SIMILARITY = true; // Pencarian kemiripan command (true, false)
const MODE = "production"; // [production, development] (jangan di ubah kecuali anda developer)
const VERSION = global.version; // don't edit

const EMAIL = "Pomgo@gmail.com";
const REGION = "Indonesia";
const WEBSITE = "Pomgo.com";
const DATA_OWNER = ["6282290723406"];

// Konfiqurasi Chat
const ANTI_CALL = false; // jika true (setiap yang nelpon pribadi akan di block)
const AUTO_READ = false; // jika true (setiap chat akan di baca/centang 2 biru)
const AUTO_BACKUP = false; // jika true (setiap restart server, data backup di kirimkan ke wa owner);
const MIDNIGHT_RESTART = false; // Restart setiap jam 12 malam
const PRESENCE_UPDATE = ""; // unavailable, available, composing, recording, paused
const TYPE_WELCOME = "1"; // 1, 2, 3, 4, 5, 6 text dan random
const BG_WELCOME2 = "https://api.autoresbot.com/api/maker/bg-default";

// antibadword di grub
const BADWORD_WARNING = 3; // Jumlah maksimum peringatan sebelum tindakan diambil
const BADWORD_ACTION = "both"; // tindakan setelah warning terpenuhi (kick, block, both)

// antispam di grub
const SPAM_LIMIT = 3; // Batas pesan dianggap spam
const SPAM_COULDOWN = 10; // Waktu cooldown dalam detik (10 detik)
const SPAM_WARNING = 3; // Jumlah maksimum peringatan sebelum tindakan diambil
const SPAM_ACTION = "both"; // tindakan setelah warning terpenuhi (kick, block, both)

// More
const STATUS_SCHEDULED = true;

const config = {
  APIKEY,
  phone_number_bot: NOMOR_BOT,
  type_connection: CONNECTION,
  bot_destination: DESTINATION,
  owner_name: OWNER_NAME,
  owner_number: DATA_OWNER,
  owner_website: WEBSITE,
  owner_email: EMAIL,
  region: REGION,
  version: VERSION,
  rate_limit: RATE_LIMIT,
  status_prefix: true, // wajib prefix : atau false tanpa prefix
  prefix: [".", "!", "#"],
  sticker_packname: OWNER_NAME,
  sticker_author: `Date: ${moment
    .tz("Asia/Makassar")
    .format("DD/MM/YY")}\nYouTube: Renyoka\nOwner: 0822-9072-3406`,
  mode: MODE,
  commandSimilarity: SIMILARITY,
  anticall: ANTI_CALL,
  autoread: AUTO_READ,
  autobackup: AUTO_BACKUP,
  PresenceUpdate: PRESENCE_UPDATE,
  typewelcome: TYPE_WELCOME,
  bgwelcome2: BG_WELCOME2,
  midnight_restart: MIDNIGHT_RESTART,
  scheduled: STATUS_SCHEDULED,
  SPAM: {
    limit: SPAM_LIMIT,
    couldown: SPAM_COULDOWN,
    warning: SPAM_WARNING,
    action: SPAM_ACTION,
  },
  BADWORD: {
    warning: BADWORD_WARNING,
    action: BADWORD_ACTION,
  },
};

export default config;
