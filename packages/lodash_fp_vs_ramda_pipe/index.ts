// @ts-nocheck

import { performance, PerformanceObserver } from "perf_hooks";
import flow from "lodash/fp/flow";

type Obj = {
  name: string
}
const fn0 = (obj: Obj) => obj
const fn1 = (obj: Obj) => obj
const fn2 = (obj: Obj) => obj
const fn3 = (obj: Obj) => obj
const fn4 = (obj: Obj) => obj
const fn5 = (obj: Obj) => obj
const fn6 = (obj: Obj) => obj
const fn7 = (obj: Obj) => obj
const fn8 = (obj: Obj) => obj
const fn9 = (obj: Obj) => obj
const fn10 = (obj: Obj) => obj
const fn11 = (obj: Obj) => obj
const fn12 = (obj: Obj) => obj
const fn13 = (obj: Obj) => obj
const fn14 = (obj: Obj) => obj
const fn15 = (obj: Obj) => obj
const fn16 = (obj: Obj) => obj
const fn17 = (obj: Obj) => obj
const fn18 = (obj: Obj) => obj
const fn19 = (obj: Obj) => obj
const fn20 = (obj: Obj) => obj
const fn21 = (obj: Obj) => obj
const fn22 = (obj: Obj) => obj
const fn23 = (obj: Obj) => obj
const fn24 = (obj: Obj) => obj
const fn25 = (obj: Obj) => obj
const fn26 = (obj: Obj) => obj
const fn27 = (obj: Obj) => obj
const fn28 = (obj: Obj) => obj
const fn29 = (obj: Obj) => obj
const fn30 = (obj: Obj) => obj
const fn31 = (obj: Obj) => obj
const fn32 = (obj: Obj) => obj
const fn33 = (obj: Obj) => obj
const fn34 = (obj: Obj) => obj
const fn35 = (obj: Obj) => obj
const fn36 = (obj: Obj) => obj
const fn37 = (obj: Obj) => obj
const fn38 = (obj: Obj) => obj
const fn39 = (obj: Obj) => obj
const fn40 = (obj: Obj) => obj
const fn41 = (obj: Obj) => obj
const fn42 = (obj: Obj) => obj
const fn43 = (obj: Obj) => obj
const fn44 = (obj: Obj) => obj
const fn45 = (obj: Obj) => obj
const fn46 = (obj: Obj) => obj
const fn47 = (obj: Obj) => obj
const fn48 = (obj: Obj) => obj
const fn49 = (obj: Obj) => obj
const fn50 = (obj: Obj) => obj
const fn51 = (obj: Obj) => obj
const fn52 = (obj: Obj) => obj
const fn53 = (obj: Obj) => obj
const fn54 = (obj: Obj) => obj
const fn55 = (obj: Obj) => obj
const fn56 = (obj: Obj) => obj
const fn57 = (obj: Obj) => obj
const fn58 = (obj: Obj) => obj
const fn59 = (obj: Obj) => obj
const fn60 = (obj: Obj) => obj
const fn61 = (obj: Obj) => obj
const fn62 = (obj: Obj) => obj
const fn63 = (obj: Obj) => obj
const fn64 = (obj: Obj) => obj
const fn65 = (obj: Obj) => obj
const fn66 = (obj: Obj) => obj
const fn67 = (obj: Obj) => obj
const fn68 = (obj: Obj) => obj
const fn69 = (obj: Obj) => obj
const fn70 = (obj: Obj) => obj
const fn71 = (obj: Obj) => obj
const fn72 = (obj: Obj) => obj
const fn73 = (obj: Obj) => obj
const fn74 = (obj: Obj) => obj
const fn75 = (obj: Obj) => obj
const fn76 = (obj: Obj) => obj
const fn77 = (obj: Obj) => obj
const fn78 = (obj: Obj) => obj
const fn79 = (obj: Obj) => obj
const fn80 = (obj: Obj) => obj
const fn81 = (obj: Obj) => obj
const fn82 = (obj: Obj) => obj
const fn83 = (obj: Obj) => obj
const fn84 = (obj: Obj) => obj
const fn85 = (obj: Obj) => obj
const fn86 = (obj: Obj) => obj
const fn87 = (obj: Obj) => obj
const fn88 = (obj: Obj) => obj
const fn89 = (obj: Obj) => obj
const fn90 = (obj: Obj) => obj
const fn91 = (obj: Obj) => obj
const fn92 = (obj: Obj) => obj
const fn93 = (obj: Obj) => obj
const fn94 = (obj: Obj) => obj
const fn95 = (obj: Obj) => obj
const fn96 = (obj: Obj) => obj
const fn97 = (obj: Obj) => obj
const fn98 = (obj: Obj) => obj
const fn99 = (obj: Obj) => obj
const fn100 = (obj: Obj) => obj
const fn101 = (obj: Obj) => obj
const fn102 = (obj: Obj) => obj
const fn103 = (obj: Obj) => obj
const fn104 = (obj: Obj) => obj
const fn105 = (obj: Obj) => obj
const fn106 = (obj: Obj) => obj
const fn107 = (obj: Obj) => obj
const fn108 = (obj: Obj) => obj
const fn109 = (obj: Obj) => obj
const fn110 = (obj: Obj) => obj
const fn111 = (obj: Obj) => obj
const fn112 = (obj: Obj) => obj
const fn113 = (obj: Obj) => obj
const fn114 = (obj: Obj) => obj
const fn115 = (obj: Obj) => obj
const fn116 = (obj: Obj) => obj
const fn117 = (obj: Obj) => obj
const fn118 = (obj: Obj) => obj
const fn119 = (obj: Obj) => obj
const fn120 = (obj: Obj) => obj
const fn121 = (obj: Obj) => obj
const fn122 = (obj: Obj) => obj
const fn123 = (obj: Obj) => obj
const fn124 = (obj: Obj) => obj
const fn125 = (obj: Obj) => obj
const fn126 = (obj: Obj) => obj
const fn127 = (obj: Obj) => obj
const fn128 = (obj: Obj) => obj
const fn129 = (obj: Obj) => obj
const fn130 = (obj: Obj) => obj
const fn131 = (obj: Obj) => obj
const fn132 = (obj: Obj) => obj
const fn133 = (obj: Obj) => obj
const fn134 = (obj: Obj) => obj
const fn135 = (obj: Obj) => obj
const fn136 = (obj: Obj) => obj
const fn137 = (obj: Obj) => obj
const fn138 = (obj: Obj) => obj
const fn139 = (obj: Obj) => obj
const fn140 = (obj: Obj) => obj
const fn141 = (obj: Obj) => obj
const fn142 = (obj: Obj) => obj
const fn143 = (obj: Obj) => obj
const fn144 = (obj: Obj) => obj
const fn145 = (obj: Obj) => obj
const fn146 = (obj: Obj) => obj
const fn147 = (obj: Obj) => obj
const fn148 = (obj: Obj) => obj
const fn149 = (obj: Obj) => obj
const fn150 = (obj: Obj) => obj
const fn151 = (obj: Obj) => obj
const fn152 = (obj: Obj) => obj
const fn153 = (obj: Obj) => obj
const fn154 = (obj: Obj) => obj
const fn155 = (obj: Obj) => obj
const fn156 = (obj: Obj) => obj
const fn157 = (obj: Obj) => obj
const fn158 = (obj: Obj) => obj
const fn159 = (obj: Obj) => obj
const fn160 = (obj: Obj) => obj
const fn161 = (obj: Obj) => obj
const fn162 = (obj: Obj) => obj
const fn163 = (obj: Obj) => obj
const fn164 = (obj: Obj) => obj
const fn165 = (obj: Obj) => obj
const fn166 = (obj: Obj) => obj
const fn167 = (obj: Obj) => obj
const fn168 = (obj: Obj) => obj
const fn169 = (obj: Obj) => obj
const fn170 = (obj: Obj) => obj
const fn171 = (obj: Obj) => obj
const fn172 = (obj: Obj) => obj
const fn173 = (obj: Obj) => obj
const fn174 = (obj: Obj) => obj
const fn175 = (obj: Obj) => obj
const fn176 = (obj: Obj) => obj
const fn177 = (obj: Obj) => obj
const fn178 = (obj: Obj) => obj
const fn179 = (obj: Obj) => obj
const fn180 = (obj: Obj) => obj
const fn181 = (obj: Obj) => obj
const fn182 = (obj: Obj) => obj
const fn183 = (obj: Obj) => obj
const fn184 = (obj: Obj) => obj
const fn185 = (obj: Obj) => obj
const fn186 = (obj: Obj) => obj
const fn187 = (obj: Obj) => obj
const fn188 = (obj: Obj) => obj
const fn189 = (obj: Obj) => obj
const fn190 = (obj: Obj) => obj
const fn191 = (obj: Obj) => obj
const fn192 = (obj: Obj) => obj
const fn193 = (obj: Obj) => obj
const fn194 = (obj: Obj) => obj
const fn195 = (obj: Obj) => obj
const fn196 = (obj: Obj) => obj
const fn197 = (obj: Obj) => obj
const fn198 = (obj: Obj) => obj
const fn199 = (obj: Obj) => obj
const fn200 = (obj: Obj) => obj
const fn201 = (obj: Obj) => obj
const fn202 = (obj: Obj) => obj
const fn203 = (obj: Obj) => obj
const fn204 = (obj: Obj) => obj
const fn205 = (obj: Obj) => obj
const fn206 = (obj: Obj) => obj
const fn207 = (obj: Obj) => obj
const fn208 = (obj: Obj) => obj
const fn209 = (obj: Obj) => obj
const fn210 = (obj: Obj) => obj
const fn211 = (obj: Obj) => obj
const fn212 = (obj: Obj) => obj
const fn213 = (obj: Obj) => obj
const fn214 = (obj: Obj) => obj
const fn215 = (obj: Obj) => obj
const fn216 = (obj: Obj) => obj
const fn217 = (obj: Obj) => obj
const fn218 = (obj: Obj) => obj
const fn219 = (obj: Obj) => obj
const fn220 = (obj: Obj) => obj
const fn221 = (obj: Obj) => obj
const fn222 = (obj: Obj) => obj
const fn223 = (obj: Obj) => obj
const fn224 = (obj: Obj) => obj
const fn225 = (obj: Obj) => obj
const fn226 = (obj: Obj) => obj
const fn227 = (obj: Obj) => obj
const fn228 = (obj: Obj) => obj
const fn229 = (obj: Obj) => obj
const fn230 = (obj: Obj) => obj
const fn231 = (obj: Obj) => obj
const fn232 = (obj: Obj) => obj
const fn233 = (obj: Obj) => obj
const fn234 = (obj: Obj) => obj
const fn235 = (obj: Obj) => obj
const fn236 = (obj: Obj) => obj
const fn237 = (obj: Obj) => obj
const fn238 = (obj: Obj) => obj
const fn239 = (obj: Obj) => obj
const fn240 = (obj: Obj) => obj
const fn241 = (obj: Obj) => obj
const fn242 = (obj: Obj) => obj
const fn243 = (obj: Obj) => obj
const fn244 = (obj: Obj) => obj
const fn245 = (obj: Obj) => obj
const fn246 = (obj: Obj) => obj
const fn247 = (obj: Obj) => obj
const fn248 = (obj: Obj) => obj
const fn249 = (obj: Obj) => obj
const fn250 = (obj: Obj) => obj
const fn251 = (obj: Obj) => obj
const fn252 = (obj: Obj) => obj
const fn253 = (obj: Obj) => obj
const fn254 = (obj: Obj) => obj
const fn255 = (obj: Obj) => obj
const fn256 = (obj: Obj) => obj
const fn257 = (obj: Obj) => obj
const fn258 = (obj: Obj) => obj
const fn259 = (obj: Obj) => obj
const fn260 = (obj: Obj) => obj
const fn261 = (obj: Obj) => obj
const fn262 = (obj: Obj) => obj
const fn263 = (obj: Obj) => obj
const fn264 = (obj: Obj) => obj
const fn265 = (obj: Obj) => obj
const fn266 = (obj: Obj) => obj
const fn267 = (obj: Obj) => obj
const fn268 = (obj: Obj) => obj
const fn269 = (obj: Obj) => obj
const fn270 = (obj: Obj) => obj
const fn271 = (obj: Obj) => obj
const fn272 = (obj: Obj) => obj
const fn273 = (obj: Obj) => obj
const fn274 = (obj: Obj) => obj
const fn275 = (obj: Obj) => obj
const fn276 = (obj: Obj) => obj
const fn277 = (obj: Obj) => obj
const fn278 = (obj: Obj) => obj
const fn279 = (obj: Obj) => obj
const fn280 = (obj: Obj) => obj
const fn281 = (obj: Obj) => obj
const fn282 = (obj: Obj) => obj
const fn283 = (obj: Obj) => obj
const fn284 = (obj: Obj) => obj
const fn285 = (obj: Obj) => obj
const fn286 = (obj: Obj) => obj
const fn287 = (obj: Obj) => obj
const fn288 = (obj: Obj) => obj
const fn289 = (obj: Obj) => obj
const fn290 = (obj: Obj) => obj
const fn291 = (obj: Obj) => obj
const fn292 = (obj: Obj) => obj
const fn293 = (obj: Obj) => obj
const fn294 = (obj: Obj) => obj
const fn295 = (obj: Obj) => obj
const fn296 = (obj: Obj) => obj
const fn297 = (obj: Obj) => obj
const fn298 = (obj: Obj) => obj
const fn299 = (obj: Obj) => obj
const fn300 = (obj: Obj) => obj
const fn301 = (obj: Obj) => obj
const fn302 = (obj: Obj) => obj
const fn303 = (obj: Obj) => obj
const fn304 = (obj: Obj) => obj
const fn305 = (obj: Obj) => obj
const fn306 = (obj: Obj) => obj
const fn307 = (obj: Obj) => obj
const fn308 = (obj: Obj) => obj
const fn309 = (obj: Obj) => obj
const fn310 = (obj: Obj) => obj
const fn311 = (obj: Obj) => obj
const fn312 = (obj: Obj) => obj
const fn313 = (obj: Obj) => obj
const fn314 = (obj: Obj) => obj
const fn315 = (obj: Obj) => obj
const fn316 = (obj: Obj) => obj
const fn317 = (obj: Obj) => obj
const fn318 = (obj: Obj) => obj
const fn319 = (obj: Obj) => obj
const fn320 = (obj: Obj) => obj
const fn321 = (obj: Obj) => obj
const fn322 = (obj: Obj) => obj
const fn323 = (obj: Obj) => obj
const fn324 = (obj: Obj) => obj
const fn325 = (obj: Obj) => obj
const fn326 = (obj: Obj) => obj
const fn327 = (obj: Obj) => obj
const fn328 = (obj: Obj) => obj
const fn329 = (obj: Obj) => obj
const fn330 = (obj: Obj) => obj
const fn331 = (obj: Obj) => obj
const fn332 = (obj: Obj) => obj
const fn333 = (obj: Obj) => obj
const fn334 = (obj: Obj) => obj
const fn335 = (obj: Obj) => obj
const fn336 = (obj: Obj) => obj
const fn337 = (obj: Obj) => obj
const fn338 = (obj: Obj) => obj
const fn339 = (obj: Obj) => obj
const fn340 = (obj: Obj) => obj
const fn341 = (obj: Obj) => obj
const fn342 = (obj: Obj) => obj
const fn343 = (obj: Obj) => obj
const fn344 = (obj: Obj) => obj
const fn345 = (obj: Obj) => obj
const fn346 = (obj: Obj) => obj
const fn347 = (obj: Obj) => obj
const fn348 = (obj: Obj) => obj
const fn349 = (obj: Obj) => obj
const fn350 = (obj: Obj) => obj
const fn351 = (obj: Obj) => obj
const fn352 = (obj: Obj) => obj
const fn353 = (obj: Obj) => obj
const fn354 = (obj: Obj) => obj
const fn355 = (obj: Obj) => obj
const fn356 = (obj: Obj) => obj
const fn357 = (obj: Obj) => obj
const fn358 = (obj: Obj) => obj
const fn359 = (obj: Obj) => obj
const fn360 = (obj: Obj) => obj
const fn361 = (obj: Obj) => obj
const fn362 = (obj: Obj) => obj
const fn363 = (obj: Obj) => obj
const fn364 = (obj: Obj) => obj
const fn365 = (obj: Obj) => obj
const fn366 = (obj: Obj) => obj
const fn367 = (obj: Obj) => obj
const fn368 = (obj: Obj) => obj
const fn369 = (obj: Obj) => obj
const fn370 = (obj: Obj) => obj
const fn371 = (obj: Obj) => obj
const fn372 = (obj: Obj) => obj
const fn373 = (obj: Obj) => obj
const fn374 = (obj: Obj) => obj
const fn375 = (obj: Obj) => obj
const fn376 = (obj: Obj) => obj
const fn377 = (obj: Obj) => obj
const fn378 = (obj: Obj) => obj
const fn379 = (obj: Obj) => obj
const fn380 = (obj: Obj) => obj
const fn381 = (obj: Obj) => obj
const fn382 = (obj: Obj) => obj
const fn383 = (obj: Obj) => obj
const fn384 = (obj: Obj) => obj
const fn385 = (obj: Obj) => obj
const fn386 = (obj: Obj) => obj
const fn387 = (obj: Obj) => obj
const fn388 = (obj: Obj) => obj
const fn389 = (obj: Obj) => obj
const fn390 = (obj: Obj) => obj
const fn391 = (obj: Obj) => obj
const fn392 = (obj: Obj) => obj
const fn393 = (obj: Obj) => obj
const fn394 = (obj: Obj) => obj
const fn395 = (obj: Obj) => obj
const fn396 = (obj: Obj) => obj
const fn397 = (obj: Obj) => obj
const fn398 = (obj: Obj) => obj
const fn399 = (obj: Obj) => obj
const fn400 = (obj: Obj) => obj
const fn401 = (obj: Obj) => obj
const fn402 = (obj: Obj) => obj
const fn403 = (obj: Obj) => obj
const fn404 = (obj: Obj) => obj
const fn405 = (obj: Obj) => obj
const fn406 = (obj: Obj) => obj
const fn407 = (obj: Obj) => obj
const fn408 = (obj: Obj) => obj
const fn409 = (obj: Obj) => obj
const fn410 = (obj: Obj) => obj
const fn411 = (obj: Obj) => obj
const fn412 = (obj: Obj) => obj
const fn413 = (obj: Obj) => obj
const fn414 = (obj: Obj) => obj
const fn415 = (obj: Obj) => obj
const fn416 = (obj: Obj) => obj
const fn417 = (obj: Obj) => obj
const fn418 = (obj: Obj) => obj
const fn419 = (obj: Obj) => obj
const fn420 = (obj: Obj) => obj
const fn421 = (obj: Obj) => obj
const fn422 = (obj: Obj) => obj
const fn423 = (obj: Obj) => obj
const fn424 = (obj: Obj) => obj
const fn425 = (obj: Obj) => obj
const fn426 = (obj: Obj) => obj
const fn427 = (obj: Obj) => obj
const fn428 = (obj: Obj) => obj
const fn429 = (obj: Obj) => obj
const fn430 = (obj: Obj) => obj
const fn431 = (obj: Obj) => obj
const fn432 = (obj: Obj) => obj
const fn433 = (obj: Obj) => obj
const fn434 = (obj: Obj) => obj
const fn435 = (obj: Obj) => obj
const fn436 = (obj: Obj) => obj
const fn437 = (obj: Obj) => obj
const fn438 = (obj: Obj) => obj
const fn439 = (obj: Obj) => obj
const fn440 = (obj: Obj) => obj
const fn441 = (obj: Obj) => obj
const fn442 = (obj: Obj) => obj
const fn443 = (obj: Obj) => obj
const fn444 = (obj: Obj) => obj
const fn445 = (obj: Obj) => obj
const fn446 = (obj: Obj) => obj
const fn447 = (obj: Obj) => obj
const fn448 = (obj: Obj) => obj
const fn449 = (obj: Obj) => obj
const fn450 = (obj: Obj) => obj
const fn451 = (obj: Obj) => obj
const fn452 = (obj: Obj) => obj
const fn453 = (obj: Obj) => obj
const fn454 = (obj: Obj) => obj
const fn455 = (obj: Obj) => obj
const fn456 = (obj: Obj) => obj
const fn457 = (obj: Obj) => obj
const fn458 = (obj: Obj) => obj
const fn459 = (obj: Obj) => obj
const fn460 = (obj: Obj) => obj
const fn461 = (obj: Obj) => obj
const fn462 = (obj: Obj) => obj
const fn463 = (obj: Obj) => obj
const fn464 = (obj: Obj) => obj
const fn465 = (obj: Obj) => obj
const fn466 = (obj: Obj) => obj
const fn467 = (obj: Obj) => obj
const fn468 = (obj: Obj) => obj
const fn469 = (obj: Obj) => obj
const fn470 = (obj: Obj) => obj
const fn471 = (obj: Obj) => obj
const fn472 = (obj: Obj) => obj
const fn473 = (obj: Obj) => obj
const fn474 = (obj: Obj) => obj
const fn475 = (obj: Obj) => obj
const fn476 = (obj: Obj) => obj
const fn477 = (obj: Obj) => obj
const fn478 = (obj: Obj) => obj
const fn479 = (obj: Obj) => obj
const fn480 = (obj: Obj) => obj
const fn481 = (obj: Obj) => obj
const fn482 = (obj: Obj) => obj
const fn483 = (obj: Obj) => obj
const fn484 = (obj: Obj) => obj
const fn485 = (obj: Obj) => obj
const fn486 = (obj: Obj) => obj
const fn487 = (obj: Obj) => obj
const fn488 = (obj: Obj) => obj
const fn489 = (obj: Obj) => obj
const fn490 = (obj: Obj) => obj
const fn491 = (obj: Obj) => obj
const fn492 = (obj: Obj) => obj
const fn493 = (obj: Obj) => obj
const fn494 = (obj: Obj) => obj
const fn495 = (obj: Obj) => obj
const fn496 = (obj: Obj) => obj
const fn497 = (obj: Obj) => obj
const fn498 = (obj: Obj) => obj
const fn499 = (obj: Obj) => obj
const fn500 = (obj: Obj) => obj
const fn501 = (obj: Obj) => obj
const fn502 = (obj: Obj) => obj
const fn503 = (obj: Obj) => obj
const fn504 = (obj: Obj) => obj
const fn505 = (obj: Obj) => obj
const fn506 = (obj: Obj) => obj
const fn507 = (obj: Obj) => obj
const fn508 = (obj: Obj) => obj
const fn509 = (obj: Obj) => obj
const fn510 = (obj: Obj) => obj
const fn511 = (obj: Obj) => obj
const fn512 = (obj: Obj) => obj
const fn513 = (obj: Obj) => obj
const fn514 = (obj: Obj) => obj
const fn515 = (obj: Obj) => obj
const fn516 = (obj: Obj) => obj
const fn517 = (obj: Obj) => obj
const fn518 = (obj: Obj) => obj
const fn519 = (obj: Obj) => obj
const fn520 = (obj: Obj) => obj
const fn521 = (obj: Obj) => obj
const fn522 = (obj: Obj) => obj
const fn523 = (obj: Obj) => obj
const fn524 = (obj: Obj) => obj
const fn525 = (obj: Obj) => obj
const fn526 = (obj: Obj) => obj
const fn527 = (obj: Obj) => obj
const fn528 = (obj: Obj) => obj
const fn529 = (obj: Obj) => obj
const fn530 = (obj: Obj) => obj
const fn531 = (obj: Obj) => obj
const fn532 = (obj: Obj) => obj
const fn533 = (obj: Obj) => obj
const fn534 = (obj: Obj) => obj
const fn535 = (obj: Obj) => obj
const fn536 = (obj: Obj) => obj
const fn537 = (obj: Obj) => obj
const fn538 = (obj: Obj) => obj
const fn539 = (obj: Obj) => obj
const fn540 = (obj: Obj) => obj
const fn541 = (obj: Obj) => obj
const fn542 = (obj: Obj) => obj
const fn543 = (obj: Obj) => obj
const fn544 = (obj: Obj) => obj
const fn545 = (obj: Obj) => obj
const fn546 = (obj: Obj) => obj
const fn547 = (obj: Obj) => obj
const fn548 = (obj: Obj) => obj
const fn549 = (obj: Obj) => obj
const fn550 = (obj: Obj) => obj
const fn551 = (obj: Obj) => obj
const fn552 = (obj: Obj) => obj
const fn553 = (obj: Obj) => obj
const fn554 = (obj: Obj) => obj
const fn555 = (obj: Obj) => obj
const fn556 = (obj: Obj) => obj
const fn557 = (obj: Obj) => obj
const fn558 = (obj: Obj) => obj
const fn559 = (obj: Obj) => obj
const fn560 = (obj: Obj) => obj
const fn561 = (obj: Obj) => obj
const fn562 = (obj: Obj) => obj
const fn563 = (obj: Obj) => obj
const fn564 = (obj: Obj) => obj
const fn565 = (obj: Obj) => obj
const fn566 = (obj: Obj) => obj
const fn567 = (obj: Obj) => obj
const fn568 = (obj: Obj) => obj
const fn569 = (obj: Obj) => obj
const fn570 = (obj: Obj) => obj
const fn571 = (obj: Obj) => obj
const fn572 = (obj: Obj) => obj
const fn573 = (obj: Obj) => obj
const fn574 = (obj: Obj) => obj
const fn575 = (obj: Obj) => obj
const fn576 = (obj: Obj) => obj
const fn577 = (obj: Obj) => obj
const fn578 = (obj: Obj) => obj
const fn579 = (obj: Obj) => obj
const fn580 = (obj: Obj) => obj
const fn581 = (obj: Obj) => obj
const fn582 = (obj: Obj) => obj
const fn583 = (obj: Obj) => obj
const fn584 = (obj: Obj) => obj
const fn585 = (obj: Obj) => obj
const fn586 = (obj: Obj) => obj
const fn587 = (obj: Obj) => obj
const fn588 = (obj: Obj) => obj
const fn589 = (obj: Obj) => obj
const fn590 = (obj: Obj) => obj
const fn591 = (obj: Obj) => obj
const fn592 = (obj: Obj) => obj
const fn593 = (obj: Obj) => obj
const fn594 = (obj: Obj) => obj
const fn595 = (obj: Obj) => obj
const fn596 = (obj: Obj) => obj
const fn597 = (obj: Obj) => obj
const fn598 = (obj: Obj) => obj
const fn599 = (obj: Obj) => obj
const fn600 = (obj: Obj) => obj
const fn601 = (obj: Obj) => obj
const fn602 = (obj: Obj) => obj
const fn603 = (obj: Obj) => obj
const fn604 = (obj: Obj) => obj
const fn605 = (obj: Obj) => obj
const fn606 = (obj: Obj) => obj
const fn607 = (obj: Obj) => obj
const fn608 = (obj: Obj) => obj
const fn609 = (obj: Obj) => obj
const fn610 = (obj: Obj) => obj
const fn611 = (obj: Obj) => obj
const fn612 = (obj: Obj) => obj
const fn613 = (obj: Obj) => obj
const fn614 = (obj: Obj) => obj
const fn615 = (obj: Obj) => obj
const fn616 = (obj: Obj) => obj
const fn617 = (obj: Obj) => obj
const fn618 = (obj: Obj) => obj
const fn619 = (obj: Obj) => obj
const fn620 = (obj: Obj) => obj
const fn621 = (obj: Obj) => obj
const fn622 = (obj: Obj) => obj
const fn623 = (obj: Obj) => obj
const fn624 = (obj: Obj) => obj
const fn625 = (obj: Obj) => obj
const fn626 = (obj: Obj) => obj
const fn627 = (obj: Obj) => obj
const fn628 = (obj: Obj) => obj
const fn629 = (obj: Obj) => obj
const fn630 = (obj: Obj) => obj
const fn631 = (obj: Obj) => obj
const fn632 = (obj: Obj) => obj
const fn633 = (obj: Obj) => obj
const fn634 = (obj: Obj) => obj
const fn635 = (obj: Obj) => obj
const fn636 = (obj: Obj) => obj
const fn637 = (obj: Obj) => obj
const fn638 = (obj: Obj) => obj
const fn639 = (obj: Obj) => obj
const fn640 = (obj: Obj) => obj
const fn641 = (obj: Obj) => obj
const fn642 = (obj: Obj) => obj
const fn643 = (obj: Obj) => obj
const fn644 = (obj: Obj) => obj
const fn645 = (obj: Obj) => obj
const fn646 = (obj: Obj) => obj
const fn647 = (obj: Obj) => obj
const fn648 = (obj: Obj) => obj
const fn649 = (obj: Obj) => obj
const fn650 = (obj: Obj) => obj
const fn651 = (obj: Obj) => obj
const fn652 = (obj: Obj) => obj
const fn653 = (obj: Obj) => obj
const fn654 = (obj: Obj) => obj
const fn655 = (obj: Obj) => obj
const fn656 = (obj: Obj) => obj
const fn657 = (obj: Obj) => obj
const fn658 = (obj: Obj) => obj
const fn659 = (obj: Obj) => obj
const fn660 = (obj: Obj) => obj
const fn661 = (obj: Obj) => obj
const fn662 = (obj: Obj) => obj
const fn663 = (obj: Obj) => obj
const fn664 = (obj: Obj) => obj
const fn665 = (obj: Obj) => obj
const fn666 = (obj: Obj) => obj
const fn667 = (obj: Obj) => obj
const fn668 = (obj: Obj) => obj
const fn669 = (obj: Obj) => obj
const fn670 = (obj: Obj) => obj
const fn671 = (obj: Obj) => obj
const fn672 = (obj: Obj) => obj
const fn673 = (obj: Obj) => obj
const fn674 = (obj: Obj) => obj
const fn675 = (obj: Obj) => obj
const fn676 = (obj: Obj) => obj
const fn677 = (obj: Obj) => obj
const fn678 = (obj: Obj) => obj
const fn679 = (obj: Obj) => obj
const fn680 = (obj: Obj) => obj
const fn681 = (obj: Obj) => obj
const fn682 = (obj: Obj) => obj
const fn683 = (obj: Obj) => obj
const fn684 = (obj: Obj) => obj
const fn685 = (obj: Obj) => obj
const fn686 = (obj: Obj) => obj
const fn687 = (obj: Obj) => obj
const fn688 = (obj: Obj) => obj
const fn689 = (obj: Obj) => obj
const fn690 = (obj: Obj) => obj
const fn691 = (obj: Obj) => obj
const fn692 = (obj: Obj) => obj
const fn693 = (obj: Obj) => obj
const fn694 = (obj: Obj) => obj
const fn695 = (obj: Obj) => obj
const fn696 = (obj: Obj) => obj
const fn697 = (obj: Obj) => obj
const fn698 = (obj: Obj) => obj
const fn699 = (obj: Obj) => obj
const fn700 = (obj: Obj) => obj
const fn701 = (obj: Obj) => obj
const fn702 = (obj: Obj) => obj
const fn703 = (obj: Obj) => obj
const fn704 = (obj: Obj) => obj
const fn705 = (obj: Obj) => obj
const fn706 = (obj: Obj) => obj
const fn707 = (obj: Obj) => obj
const fn708 = (obj: Obj) => obj
const fn709 = (obj: Obj) => obj
const fn710 = (obj: Obj) => obj
const fn711 = (obj: Obj) => obj
const fn712 = (obj: Obj) => obj
const fn713 = (obj: Obj) => obj
const fn714 = (obj: Obj) => obj
const fn715 = (obj: Obj) => obj
const fn716 = (obj: Obj) => obj
const fn717 = (obj: Obj) => obj
const fn718 = (obj: Obj) => obj
const fn719 = (obj: Obj) => obj
const fn720 = (obj: Obj) => obj
const fn721 = (obj: Obj) => obj
const fn722 = (obj: Obj) => obj
const fn723 = (obj: Obj) => obj
const fn724 = (obj: Obj) => obj
const fn725 = (obj: Obj) => obj
const fn726 = (obj: Obj) => obj
const fn727 = (obj: Obj) => obj
const fn728 = (obj: Obj) => obj
const fn729 = (obj: Obj) => obj
const fn730 = (obj: Obj) => obj
const fn731 = (obj: Obj) => obj
const fn732 = (obj: Obj) => obj
const fn733 = (obj: Obj) => obj
const fn734 = (obj: Obj) => obj
const fn735 = (obj: Obj) => obj
const fn736 = (obj: Obj) => obj
const fn737 = (obj: Obj) => obj
const fn738 = (obj: Obj) => obj
const fn739 = (obj: Obj) => obj
const fn740 = (obj: Obj) => obj
const fn741 = (obj: Obj) => obj
const fn742 = (obj: Obj) => obj
const fn743 = (obj: Obj) => obj
const fn744 = (obj: Obj) => obj
const fn745 = (obj: Obj) => obj
const fn746 = (obj: Obj) => obj
const fn747 = (obj: Obj) => obj
const fn748 = (obj: Obj) => obj
const fn749 = (obj: Obj) => obj
const fn750 = (obj: Obj) => obj
const fn751 = (obj: Obj) => obj
const fn752 = (obj: Obj) => obj
const fn753 = (obj: Obj) => obj
const fn754 = (obj: Obj) => obj
const fn755 = (obj: Obj) => obj
const fn756 = (obj: Obj) => obj
const fn757 = (obj: Obj) => obj
const fn758 = (obj: Obj) => obj
const fn759 = (obj: Obj) => obj
const fn760 = (obj: Obj) => obj
const fn761 = (obj: Obj) => obj
const fn762 = (obj: Obj) => obj
const fn763 = (obj: Obj) => obj
const fn764 = (obj: Obj) => obj
const fn765 = (obj: Obj) => obj
const fn766 = (obj: Obj) => obj
const fn767 = (obj: Obj) => obj
const fn768 = (obj: Obj) => obj
const fn769 = (obj: Obj) => obj
const fn770 = (obj: Obj) => obj
const fn771 = (obj: Obj) => obj
const fn772 = (obj: Obj) => obj
const fn773 = (obj: Obj) => obj
const fn774 = (obj: Obj) => obj
const fn775 = (obj: Obj) => obj
const fn776 = (obj: Obj) => obj
const fn777 = (obj: Obj) => obj
const fn778 = (obj: Obj) => obj
const fn779 = (obj: Obj) => obj
const fn780 = (obj: Obj) => obj
const fn781 = (obj: Obj) => obj
const fn782 = (obj: Obj) => obj
const fn783 = (obj: Obj) => obj
const fn784 = (obj: Obj) => obj
const fn785 = (obj: Obj) => obj
const fn786 = (obj: Obj) => obj
const fn787 = (obj: Obj) => obj
const fn788 = (obj: Obj) => obj
const fn789 = (obj: Obj) => obj
const fn790 = (obj: Obj) => obj
const fn791 = (obj: Obj) => obj
const fn792 = (obj: Obj) => obj
const fn793 = (obj: Obj) => obj
const fn794 = (obj: Obj) => obj
const fn795 = (obj: Obj) => obj
const fn796 = (obj: Obj) => obj
const fn797 = (obj: Obj) => obj
const fn798 = (obj: Obj) => obj
const fn799 = (obj: Obj) => obj
const fn800 = (obj: Obj) => obj
const fn801 = (obj: Obj) => obj
const fn802 = (obj: Obj) => obj
const fn803 = (obj: Obj) => obj
const fn804 = (obj: Obj) => obj
const fn805 = (obj: Obj) => obj
const fn806 = (obj: Obj) => obj
const fn807 = (obj: Obj) => obj
const fn808 = (obj: Obj) => obj
const fn809 = (obj: Obj) => obj
const fn810 = (obj: Obj) => obj
const fn811 = (obj: Obj) => obj
const fn812 = (obj: Obj) => obj
const fn813 = (obj: Obj) => obj
const fn814 = (obj: Obj) => obj
const fn815 = (obj: Obj) => obj
const fn816 = (obj: Obj) => obj
const fn817 = (obj: Obj) => obj
const fn818 = (obj: Obj) => obj
const fn819 = (obj: Obj) => obj
const fn820 = (obj: Obj) => obj
const fn821 = (obj: Obj) => obj
const fn822 = (obj: Obj) => obj
const fn823 = (obj: Obj) => obj
const fn824 = (obj: Obj) => obj
const fn825 = (obj: Obj) => obj
const fn826 = (obj: Obj) => obj
const fn827 = (obj: Obj) => obj
const fn828 = (obj: Obj) => obj
const fn829 = (obj: Obj) => obj
const fn830 = (obj: Obj) => obj
const fn831 = (obj: Obj) => obj
const fn832 = (obj: Obj) => obj
const fn833 = (obj: Obj) => obj
const fn834 = (obj: Obj) => obj
const fn835 = (obj: Obj) => obj
const fn836 = (obj: Obj) => obj
const fn837 = (obj: Obj) => obj
const fn838 = (obj: Obj) => obj
const fn839 = (obj: Obj) => obj
const fn840 = (obj: Obj) => obj
const fn841 = (obj: Obj) => obj
const fn842 = (obj: Obj) => obj
const fn843 = (obj: Obj) => obj
const fn844 = (obj: Obj) => obj
const fn845 = (obj: Obj) => obj
const fn846 = (obj: Obj) => obj
const fn847 = (obj: Obj) => obj
const fn848 = (obj: Obj) => obj
const fn849 = (obj: Obj) => obj
const fn850 = (obj: Obj) => obj
const fn851 = (obj: Obj) => obj
const fn852 = (obj: Obj) => obj
const fn853 = (obj: Obj) => obj
const fn854 = (obj: Obj) => obj
const fn855 = (obj: Obj) => obj
const fn856 = (obj: Obj) => obj
const fn857 = (obj: Obj) => obj
const fn858 = (obj: Obj) => obj
const fn859 = (obj: Obj) => obj
const fn860 = (obj: Obj) => obj
const fn861 = (obj: Obj) => obj
const fn862 = (obj: Obj) => obj
const fn863 = (obj: Obj) => obj
const fn864 = (obj: Obj) => obj
const fn865 = (obj: Obj) => obj
const fn866 = (obj: Obj) => obj
const fn867 = (obj: Obj) => obj
const fn868 = (obj: Obj) => obj
const fn869 = (obj: Obj) => obj
const fn870 = (obj: Obj) => obj
const fn871 = (obj: Obj) => obj
const fn872 = (obj: Obj) => obj
const fn873 = (obj: Obj) => obj
const fn874 = (obj: Obj) => obj
const fn875 = (obj: Obj) => obj
const fn876 = (obj: Obj) => obj
const fn877 = (obj: Obj) => obj
const fn878 = (obj: Obj) => obj
const fn879 = (obj: Obj) => obj
const fn880 = (obj: Obj) => obj
const fn881 = (obj: Obj) => obj
const fn882 = (obj: Obj) => obj
const fn883 = (obj: Obj) => obj
const fn884 = (obj: Obj) => obj
const fn885 = (obj: Obj) => obj
const fn886 = (obj: Obj) => obj
const fn887 = (obj: Obj) => obj
const fn888 = (obj: Obj) => obj
const fn889 = (obj: Obj) => obj
const fn890 = (obj: Obj) => obj
const fn891 = (obj: Obj) => obj
const fn892 = (obj: Obj) => obj
const fn893 = (obj: Obj) => obj
const fn894 = (obj: Obj) => obj
const fn895 = (obj: Obj) => obj
const fn896 = (obj: Obj) => obj
const fn897 = (obj: Obj) => obj
const fn898 = (obj: Obj) => obj
const fn899 = (obj: Obj) => obj
const fn900 = (obj: Obj) => obj
const fn901 = (obj: Obj) => obj
const fn902 = (obj: Obj) => obj
const fn903 = (obj: Obj) => obj
const fn904 = (obj: Obj) => obj
const fn905 = (obj: Obj) => obj
const fn906 = (obj: Obj) => obj
const fn907 = (obj: Obj) => obj
const fn908 = (obj: Obj) => obj
const fn909 = (obj: Obj) => obj
const fn910 = (obj: Obj) => obj
const fn911 = (obj: Obj) => obj
const fn912 = (obj: Obj) => obj
const fn913 = (obj: Obj) => obj
const fn914 = (obj: Obj) => obj
const fn915 = (obj: Obj) => obj
const fn916 = (obj: Obj) => obj
const fn917 = (obj: Obj) => obj
const fn918 = (obj: Obj) => obj
const fn919 = (obj: Obj) => obj
const fn920 = (obj: Obj) => obj
const fn921 = (obj: Obj) => obj
const fn922 = (obj: Obj) => obj
const fn923 = (obj: Obj) => obj
const fn924 = (obj: Obj) => obj
const fn925 = (obj: Obj) => obj
const fn926 = (obj: Obj) => obj
const fn927 = (obj: Obj) => obj
const fn928 = (obj: Obj) => obj
const fn929 = (obj: Obj) => obj
const fn930 = (obj: Obj) => obj
const fn931 = (obj: Obj) => obj
const fn932 = (obj: Obj) => obj
const fn933 = (obj: Obj) => obj
const fn934 = (obj: Obj) => obj
const fn935 = (obj: Obj) => obj
const fn936 = (obj: Obj) => obj
const fn937 = (obj: Obj) => obj
const fn938 = (obj: Obj) => obj
const fn939 = (obj: Obj) => obj
const fn940 = (obj: Obj) => obj
const fn941 = (obj: Obj) => obj
const fn942 = (obj: Obj) => obj
const fn943 = (obj: Obj) => obj
const fn944 = (obj: Obj) => obj
const fn945 = (obj: Obj) => obj
const fn946 = (obj: Obj) => obj
const fn947 = (obj: Obj) => obj
const fn948 = (obj: Obj) => obj
const fn949 = (obj: Obj) => obj
const fn950 = (obj: Obj) => obj
const fn951 = (obj: Obj) => obj
const fn952 = (obj: Obj) => obj
const fn953 = (obj: Obj) => obj
const fn954 = (obj: Obj) => obj
const fn955 = (obj: Obj) => obj
const fn956 = (obj: Obj) => obj
const fn957 = (obj: Obj) => obj
const fn958 = (obj: Obj) => obj
const fn959 = (obj: Obj) => obj
const fn960 = (obj: Obj) => obj
const fn961 = (obj: Obj) => obj
const fn962 = (obj: Obj) => obj
const fn963 = (obj: Obj) => obj
const fn964 = (obj: Obj) => obj
const fn965 = (obj: Obj) => obj
const fn966 = (obj: Obj) => obj
const fn967 = (obj: Obj) => obj
const fn968 = (obj: Obj) => obj
const fn969 = (obj: Obj) => obj
const fn970 = (obj: Obj) => obj
const fn971 = (obj: Obj) => obj
const fn972 = (obj: Obj) => obj
const fn973 = (obj: Obj) => obj
const fn974 = (obj: Obj) => obj
const fn975 = (obj: Obj) => obj
const fn976 = (obj: Obj) => obj
const fn977 = (obj: Obj) => obj
const fn978 = (obj: Obj) => obj
const fn979 = (obj: Obj) => obj
const fn980 = (obj: Obj) => obj
const fn981 = (obj: Obj) => obj
const fn982 = (obj: Obj) => obj
const fn983 = (obj: Obj) => obj
const fn984 = (obj: Obj) => obj
const fn985 = (obj: Obj) => obj
const fn986 = (obj: Obj) => obj
const fn987 = (obj: Obj) => obj
const fn988 = (obj: Obj) => obj
const fn989 = (obj: Obj) => obj
const fn990 = (obj: Obj) => obj
const fn991 = (obj: Obj) => obj
const fn992 = (obj: Obj) => obj
const fn993 = (obj: Obj) => obj
const fn994 = (obj: Obj) => obj
const fn995 = (obj: Obj) => obj
const fn996 = (obj: Obj) => obj
const fn997 = (obj: Obj) => obj
const fn998 = (obj: Obj) => obj
const fn999 = (obj: Obj) => obj
const fn1000 = (obj: Obj) => console.log(obj.name);

const main = () => {
flow(fn0,
  fn1,
  fn2,
  fn3,
  fn4,
  fn5,
  fn6,
  fn7,
  fn8,
  fn9,
  fn10,
  fn11,
  fn12,
  fn13,
  fn14,
  fn15,
  fn16,
  fn17,
  fn18,
  fn19,
  fn20,
  fn21,
  fn22,
  fn23,
  fn24,
  fn25,
  fn26,
  fn27,
  fn28,
  fn29,
  fn30,
  fn31,
  fn32,
  fn33,
  fn34,
  fn35,
  fn36,
  fn37,
  fn38,
  fn39,
  fn40,
  fn41,
  fn42,
  fn43,
  fn44,
  fn45,
  fn46,
  fn47,
  fn48,
  fn49,
  fn50,
  fn51,
  fn52,
  fn53,
  fn54,
  fn55,
  fn56,
  fn57,
  fn58,
  fn59,
  fn60,
  fn61,
  fn62,
  fn63,
  fn64,
  fn65,
  fn66,
  fn67,
  fn68,
  fn69,
  fn70,
  fn71,
  fn72,
  fn73,
  fn74,
  fn75,
  fn76,
  fn77,
  fn78,
  fn79,
  fn80,
  fn81,
  fn82,
  fn83,
  fn84,
  fn85,
  fn86,
  fn87,
  fn88,
  fn89,
  fn90,
  fn91,
  fn92,
  fn93,
  fn94,
  fn95,
  fn96,
  fn97,
  fn98,
  fn99,
  fn100,
  fn101,
  fn102,
  fn103,
  fn104,
  fn105,
  fn106,
  fn107,
  fn108,
  fn109,
  fn110,
  fn111,
  fn112,
  fn113,
  fn114,
  fn115,
  fn116,
  fn117,
  fn118,
  fn119,
  fn120,
  fn121,
  fn122,
  fn123,
  fn124,
  fn125,
  fn126,
  fn127,
  fn128,
  fn129,
  fn130,
  fn131,
  fn132,
  fn133,
  fn134,
  fn135,
  fn136,
  fn137,
  fn138,
  fn139,
  fn140,
  fn141,
  fn142,
  fn143,
  fn144,
  fn145,
  fn146,
  fn147,
  fn148,
  fn149,
  fn150,
  fn151,
  fn152,
  fn153,
  fn154,
  fn155,
  fn156,
  fn157,
  fn158,
  fn159,
  fn160,
  fn161,
  fn162,
  fn163,
  fn164,
  fn165,
  fn166,
  fn167,
  fn168,
  fn169,
  fn170,
  fn171,
  fn172,
  fn173,
  fn174,
  fn175,
  fn176,
  fn177,
  fn178,
  fn179,
  fn180,
  fn181,
  fn182,
  fn183,
  fn184,
  fn185,
  fn186,
  fn187,
  fn188,
  fn189,
  fn190,
  fn191,
  fn192,
  fn193,
  fn194,
  fn195,
  fn196,
  fn197,
  fn198,
  fn199,
  fn200,
  fn201,
  fn202,
  fn203,
  fn204,
  fn205,
  fn206,
  fn207,
  fn208,
  fn209,
  fn210,
  fn211,
  fn212,
  fn213,
  fn214,
  fn215,
  fn216,
  fn217,
  fn218,
  fn219,
  fn220,
  fn221,
  fn222,
  fn223,
  fn224,
  fn225,
  fn226,
  fn227,
  fn228,
  fn229,
  fn230,
  fn231,
  fn232,
  fn233,
  fn234,
  fn235,
  fn236,
  fn237,
  fn238,
  fn239,
  fn240,
  fn241,
  fn242,
  fn243,
  fn244,
  fn245,
  fn246,
  fn247,
  fn248,
  fn249,
  fn250,
  fn251,
  fn252,
  fn253,
  fn254,
  fn255,
  fn256,
  fn257,
  fn258,
  fn259,
  fn260,
  fn261,
  fn262,
  fn263,
  fn264,
  fn265,
  fn266,
  fn267,
  fn268,
  fn269,
  fn270,
  fn271,
  fn272,
  fn273,
  fn274,
  fn275,
  fn276,
  fn277,
  fn278,
  fn279,
  fn280,
  fn281,
  fn282,
  fn283,
  fn284,
  fn285,
  fn286,
  fn287,
  fn288,
  fn289,
  fn290,
  fn291,
  fn292,
  fn293,
  fn294,
  fn295,
  fn296,
  fn297,
  fn298,
  fn299,
  fn300,
  fn301,
  fn302,
  fn303,
  fn304,
  fn305,
  fn306,
  fn307,
  fn308,
  fn309,
  fn310,
  fn311,
  fn312,
  fn313,
  fn314,
  fn315,
  fn316,
  fn317,
  fn318,
  fn319,
  fn320,
  fn321,
  fn322,
  fn323,
  fn324,
  fn325,
  fn326,
  fn327,
  fn328,
  fn329,
  fn330,
  fn331,
  fn332,
  fn333,
  fn334,
  fn335,
  fn336,
  fn337,
  fn338,
  fn339,
  fn340,
  fn341,
  fn342,
  fn343,
  fn344,
  fn345,
  fn346,
  fn347,
  fn348,
  fn349,
  fn350,
  fn351,
  fn352,
  fn353,
  fn354,
  fn355,
  fn356,
  fn357,
  fn358,
  fn359,
  fn360,
  fn361,
  fn362,
  fn363,
  fn364,
  fn365,
  fn366,
  fn367,
  fn368,
  fn369,
  fn370,
  fn371,
  fn372,
  fn373,
  fn374,
  fn375,
  fn376,
  fn377,
  fn378,
  fn379,
  fn380,
  fn381,
  fn382,
  fn383,
  fn384,
  fn385,
  fn386,
  fn387,
  fn388,
  fn389,
  fn390,
  fn391,
  fn392,
  fn393,
  fn394,
  fn395,
  fn396,
  fn397,
  fn398,
  fn399,
  fn400,
  fn401,
  fn402,
  fn403,
  fn404,
  fn405,
  fn406,
  fn407,
  fn408,
  fn409,
  fn410,
  fn411,
  fn412,
  fn413,
  fn414,
  fn415,
  fn416,
  fn417,
  fn418,
  fn419,
  fn420,
  fn421,
  fn422,
  fn423,
  fn424,
  fn425,
  fn426,
  fn427,
  fn428,
  fn429,
  fn430,
  fn431,
  fn432,
  fn433,
  fn434,
  fn435,
  fn436,
  fn437,
  fn438,
  fn439,
  fn440,
  fn441,
  fn442,
  fn443,
  fn444,
  fn445,
  fn446,
  fn447,
  fn448,
  fn449,
  fn450,
  fn451,
  fn452,
  fn453,
  fn454,
  fn455,
  fn456,
  fn457,
  fn458,
  fn459,
  fn460,
  fn461,
  fn462,
  fn463,
  fn464,
  fn465,
  fn466,
  fn467,
  fn468,
  fn469,
  fn470,
  fn471,
  fn472,
  fn473,
  fn474,
  fn475,
  fn476,
  fn477,
  fn478,
  fn479,
  fn480,
  fn481,
  fn482,
  fn483,
  fn484,
  fn485,
  fn486,
  fn487,
  fn488,
  fn489,
  fn490,
  fn491,
  fn492,
  fn493,
  fn494,
  fn495,
  fn496,
  fn497,
  fn498,
  fn499,
  fn500,
  fn501,
  fn502,
  fn503,
  fn504,
  fn505,
  fn506,
  fn507,
  fn508,
  fn509,
  fn510,
  fn511,
  fn512,
  fn513,
  fn514,
  fn515,
  fn516,
  fn517,
  fn518,
  fn519,
  fn520,
  fn521,
  fn522,
  fn523,
  fn524,
  fn525,
  fn526,
  fn527,
  fn528,
  fn529,
  fn530,
  fn531,
  fn532,
  fn533,
  fn534,
  fn535,
  fn536,
  fn537,
  fn538,
  fn539,
  fn540,
  fn541,
  fn542,
  fn543,
  fn544,
  fn545,
  fn546,
  fn547,
  fn548,
  fn549,
  fn550,
  fn551,
  fn552,
  fn553,
  fn554,
  fn555,
  fn556,
  fn557,
  fn558,
  fn559,
  fn560,
  fn561,
  fn562,
  fn563,
  fn564,
  fn565,
  fn566,
  fn567,
  fn568,
  fn569,
  fn570,
  fn571,
  fn572,
  fn573,
  fn574,
  fn575,
  fn576,
  fn577,
  fn578,
  fn579,
  fn580,
  fn581,
  fn582,
  fn583,
  fn584,
  fn585,
  fn586,
  fn587,
  fn588,
  fn589,
  fn590,
  fn591,
  fn592,
  fn593,
  fn594,
  fn595,
  fn596,
  fn597,
  fn598,
  fn599,
  fn600,
  fn601,
  fn602,
  fn603,
  fn604,
  fn605,
  fn606,
  fn607,
  fn608,
  fn609,
  fn610,
  fn611,
  fn612,
  fn613,
  fn614,
  fn615,
  fn616,
  fn617,
  fn618,
  fn619,
  fn620,
  fn621,
  fn622,
  fn623,
  fn624,
  fn625,
  fn626,
  fn627,
  fn628,
  fn629,
  fn630,
  fn631,
  fn632,
  fn633,
  fn634,
  fn635,
  fn636,
  fn637,
  fn638,
  fn639,
  fn640,
  fn641,
  fn642,
  fn643,
  fn644,
  fn645,
  fn646,
  fn647,
  fn648,
  fn649,
  fn650,
  fn651,
  fn652,
  fn653,
  fn654,
  fn655,
  fn656,
  fn657,
  fn658,
  fn659,
  fn660,
  fn661,
  fn662,
  fn663,
  fn664,
  fn665,
  fn666,
  fn667,
  fn668,
  fn669,
  fn670,
  fn671,
  fn672,
  fn673,
  fn674,
  fn675,
  fn676,
  fn677,
  fn678,
  fn679,
  fn680,
  fn681,
  fn682,
  fn683,
  fn684,
  fn685,
  fn686,
  fn687,
  fn688,
  fn689,
  fn690,
  fn691,
  fn692,
  fn693,
  fn694,
  fn695,
  fn696,
  fn697,
  fn698,
  fn699,
  fn700,
  fn701,
  fn702,
  fn703,
  fn704,
  fn705,
  fn706,
  fn707,
  fn708,
  fn709,
  fn710,
  fn711,
  fn712,
  fn713,
  fn714,
  fn715,
  fn716,
  fn717,
  fn718,
  fn719,
  fn720,
  fn721,
  fn722,
  fn723,
  fn724,
  fn725,
  fn726,
  fn727,
  fn728,
  fn729,
  fn730,
  fn731,
  fn732,
  fn733,
  fn734,
  fn735,
  fn736,
  fn737,
  fn738,
  fn739,
  fn740,
  fn741,
  fn742,
  fn743,
  fn744,
  fn745,
  fn746,
  fn747,
  fn748,
  fn749,
  fn750,
  fn751,
  fn752,
  fn753,
  fn754,
  fn755,
  fn756,
  fn757,
  fn758,
  fn759,
  fn760,
  fn761,
  fn762,
  fn763,
  fn764,
  fn765,
  fn766,
  fn767,
  fn768,
  fn769,
  fn770,
  fn771,
  fn772,
  fn773,
  fn774,
  fn775,
  fn776,
  fn777,
  fn778,
  fn779,
  fn780,
  fn781,
  fn782,
  fn783,
  fn784,
  fn785,
  fn786,
  fn787,
  fn788,
  fn789,
  fn790,
  fn791,
  fn792,
  fn793,
  fn794,
  fn795,
  fn796,
  fn797,
  fn798,
  fn799,
  fn800,
  fn801,
  fn802,
  fn803,
  fn804,
  fn805,
  fn806,
  fn807,
  fn808,
  fn809,
  fn810,
  fn811,
  fn812,
  fn813,
  fn814,
  fn815,
  fn816,
  fn817,
  fn818,
  fn819,
  fn820,
  fn821,
  fn822,
  fn823,
  fn824,
  fn825,
  fn826,
  fn827,
  fn828,
  fn829,
  fn830,
  fn831,
  fn832,
  fn833,
  fn834,
  fn835,
  fn836,
  fn837,
  fn838,
  fn839,
  fn840,
  fn841,
  fn842,
  fn843,
  fn844,
  fn845,
  fn846,
  fn847,
  fn848,
  fn849,
  fn850,
  fn851,
  fn852,
  fn853,
  fn854,
  fn855,
  fn856,
  fn857,
  fn858,
  fn859,
  fn860,
  fn861,
  fn862,
  fn863,
  fn864,
  fn865,
  fn866,
  fn867,
  fn868,
  fn869,
  fn870,
  fn871,
  fn872,
  fn873,
  fn874,
  fn875,
  fn876,
  fn877,
  fn878,
  fn879,
  fn880,
  fn881,
  fn882,
  fn883,
  fn884,
  fn885,
  fn886,
  fn887,
  fn888,
  fn889,
  fn890,
  fn891,
  fn892,
  fn893,
  fn894,
  fn895,
  fn896,
  fn897,
  fn898,
  fn899,
  fn900,
  fn901,
  fn902,
  fn903,
  fn904,
  fn905,
  fn906,
  fn907,
  fn908,
  fn909,
  fn910,
  fn911,
  fn912,
  fn913,
  fn914,
  fn915,
  fn916,
  fn917,
  fn918,
  fn919,
  fn920,
  fn921,
  fn922,
  fn923,
  fn924,
  fn925,
  fn926,
  fn927,
  fn928,
  fn929,
  fn930,
  fn931,
  fn932,
  fn933,
  fn934,
  fn935,
  fn936,
  fn937,
  fn938,
  fn939,
  fn940,
  fn941,
  fn942,
  fn943,
  fn944,
  fn945,
  fn946,
  fn947,
  fn948,
  fn949,
  fn950,
  fn951,
  fn952,
  fn953,
  fn954,
  fn955,
  fn956,
  fn957,
  fn958,
  fn959,
  fn960,
  fn961,
  fn962,
  fn963,
  fn964,
  fn965,
  fn966,
  fn967,
  fn968,
  fn969,
  fn970,
  fn971,
  fn972,
  fn973,
  fn974,
  fn975,
  fn976,
  fn977,
  fn978,
  fn979,
  fn980,
  fn981,
  fn982,
  fn983,
  fn984,
  fn985,
  fn986,
  fn987,
  fn988,
  fn989,
  fn990,
  fn991,
  fn992,
  fn993,
  fn994,
  fn995,
  fn996,
  fn997,
  fn998,
  fn999,
  fn1000,
  )({name: 'tyankatsu'})
}

const obs = new PerformanceObserver((list, observer) => {
  const data = list.getEntries();

  data.forEach((l) => {
    if (l.name === 'main') console.log('duration', l.duration);
  });

  observer.disconnect();
});

obs.observe({ entryTypes: ['function'], buffered: true });
const wrapped = performance.timerify(main);
wrapped();
