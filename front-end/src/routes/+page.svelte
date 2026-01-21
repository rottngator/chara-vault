<script>
    import { activeGame, insertDisc } from "$lib/gameTracker";
    import { mainCharacters, characterList } from "$lib/data";

    // popup logic
    let showInstructions = false;
    const toggleInstructions = () => showInstructions = !showInstructions;
</script>

<div class="living-room">
    <aside class="shelf">
        <img src="/home_page/game_shelf1.png" alt="Main Shelf" class="shelf-bg" />
        <div class="shelf-content">
            <h3>MAINS</h3>
            {#each mainCharacters as game}
                <button 
                    class="disc-btn" 
                    style="top: {game.top}; left: {game.left};"
                    on:click={() => insertDisc(game)}>
                    <img src={game.img} alt={game.title} />
                    <span class="tooltip">{game.title}</span>
                </button>
            {/each}
        </div>
    </aside>

    <main class="setup">
        <div class="tv-container">
            <div class="screen-mask">
                {#if $activeGame}
                    <div class="game-boot">
                        <h2 class="glow-text">{$activeGame.title}</h2>
                        <p class="status-msg">CHECKING MEMORY CARD...</p>
                        <a href="/play/{$activeGame.id}" class="start-btn"> START GAME </a>
                    </div>
                {:else}
                    <div class="not-recg">
                        <p>NO DISC FOUND.</p>
                        <span class="sub-text">PLEASE INSERT A GAME DISC</span>
                    </div>
                {/if}
                <div class="scanlines"></div>
            </div>
            <img src="/home_page/crt_tv.png" alt="TV Frame" class="tv-frame-img" />
        </div>

        <div class="ps2-container">
            <img src="/home_page/ps2_closed.png" alt="PS2 Console" class="ps2-img" />
        </div>
    </main>

    <aside class="shelf">
        <img src="/home_page/game_shelf2.png" alt="Archive Shelf" class="shelf-bg" />
        <div class="shelf-content">
            <h3>ARCHIVES</h3>
            {#each characterList as item}
                <button 
                    class="disc-btn" 
                    style="top: {item.top}; left: {item.left};"
                    on:click={() => insertDisc(item)}>
                    <img src={item.img} alt={item.title} />
                    <span class="tooltip">{item.title}</span>
                </button>
            {/each}

            <a href="/playlist" class="shelf-object" style="bottom: 12%; left: 15%;">
                <img src="/objects/walkman.png" alt="Playlist" />
                <span class="tooltip">PLAYLIST</span>
            </a>

            <button class="shelf-object" style="bottom: 12%; right: 15%;" on:click={toggleInstructions}>
                <img src="/objects/sticky_note.png" alt="Instructions" />
                <span class="tooltip">HELP</span>
            </button>
        </div>
    </aside>
</div>

{#if showInstructions}
    <div class="modal-overlay" on:click={toggleInstructions}>
        <div class="modal-content" on:click|stopPropagation>
            <h2>ARCHIVE MANUAL</h2>
            <hr />
            <ul>
                <li><strong>DISCS:</strong> Click a disc to insert it into the console.</li>
                <li><strong>TV:</strong> Once a disc is recognized, press START.</li>
                <li><strong>OBJECTS:</strong> Interact with shelf items for extras.</li>
            </ul>
            <button class="close-btn" on:click={toggleInstructions}>X CLOSE</button>
        </div>
    </div>
{/if}

<style>

    .living-room {
        display: grid;
        grid-template-columns: 320px 1fr 320px;
        gap: 1rem;
        align-items: center;
        height: 85vh;
        padding: 0 2rem;
    }

    .shelf {
        position: relative;
        width: 320px;
        height: 540px;
        overflow: hidden;
    }

    .shelf-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        object-fit: fill;
        z-index: 1;
    }

    .shelf-content {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        z-index: 2;
    }

    .shelf h3 {
        font-family: monospace;
        font-size: 0.8rem;
        color: rgba(255,255,255,0.4);
        text-align: center;
        margin-top: 15px;
    }

    .disc-btn, .shelf-object {
        position: absolute;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: transform 0.2s, filter 0.2s;
    }

    .disc-btn img, .shelf-object img {
        width: 65px;
        height: auto;
        filter: drop-shadow(2px 4px 5px rgba(0,0,0,0.8));
    }

    .disc-btn:hover, .shelf-object:hover {
        transform: scale(1.15) rotate(5deg);
        filter: brightness(1.2);
    }

    .tooltip {
        visibility: hidden;
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 4px 8px;
        font-size: 0.6rem;
        white-space: nowrap;
        border: 1px solid #444;
        z-index: 20;
    }

    .disc-btn:hover .tooltip, .shelf-object:hover .tooltip {
        visibility: visible;
    }

    .modal-overlay {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .modal-content {
        background: #fdfd96;
        color: #222;
        padding: 30px;
        width: 350px;
        font-family: 'Courier New', monospace;
        border: 2px solid #000;
        box-shadow: 15px 15px 0px #000;
    }

    .modal-content h2 { margin-top: 0; font-size: 1.2rem; }
    .modal-content ul { padding-left: 20px; font-size: 0.9rem; }
    .modal-content li { margin-bottom: 10px; }

    .close-btn {
        margin-top: 20px;
        background: #000;
        color: #fff;
        border: none;
        padding: 5px 15px;
        cursor: pointer;
        font-family: monospace;
    }

    .setup { display: flex; flex-direction: column; align-items: center; }
    .tv-container { position: relative; width: 550px; }
    .tv-frame-img { width: 100%; display: block; position: relative; z-index: 10; pointer-events: none; }
    .screen-mask { position: absolute; top: 12%; left: 11%; width: 78%; height: 70%; background: #000; z-index: 1; display: flex; justify-content: center; align-items: center; }
    .scanlines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%); background-size: 100% 4px; z-index: 5; pointer-events: none; }
    .ps2-container { position: relative; width: 300px; margin-top: -20px; }
    .ps2-img { width: 100%; }
    .game-boot, .not-recg { color: #fff; font-family: 'Courier New', monospace; text-align: center; }
    .glow-text { font-size: 1.2rem; text-shadow: 0 0 8px #fff; }
    .status-msg { font-size: 0.7rem; color: #888; }
    .start-btn { display: inline-block; margin-top: 10px; padding: 5px 15px; background: #0044ff; color: white; text-decoration: none; border: 1px solid white; font-size: 0.8rem; }
</style>