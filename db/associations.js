const Collection = require("../models/collection");
const GarbageTruck = require("../models/garbageTruck");
const Zone = require("../models/zone");

// //GarbageTruck - Zone (ManyToMany)
GarbageTruck.belongsToMany(Zone, { through: Collection });
Zone.belongsToMany(GarbageTruck, { through: Collection });

GarbageTruck.hasMany(Collection);
Collection.belongsTo(GarbageTruck);

Zone.hasMany(Collection);
Collection.belongsTo(Zone);
