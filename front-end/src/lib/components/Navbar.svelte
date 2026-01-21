<nav>
    <div class="slot-container">
        <span class="slot-label">HOME</span>
        <a href="/" class="card-link">
            <img src="../../home_page/memory_card1.png" alt="Save File Home" class="card-img" />
            
        </a>
    </div>

    <div class="system-brand">
        <h1>OC_ARCHIVE</h1>
        <div class="line"></div>
    </div>

    <div class="slot-container">
        <span class="slot-label">GALLERY</span>
        <a href="/gallery" class="card-link">
            <img src="../../home_page/memory_card2.png" alt="Save File Gallery" class="card-img" />
        </a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 50px;
        background: transparent;
        font-family: 'Courier New', Courier, monospace;
    }

    .slot-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .slot-label {
        font-size: 0.6rem;
        color: #444;
        font-weight: bold;
    }

    .card-link {
        position: relative;
        text-decoration: none;
        transition: transform 0.2s ease;
    }

    .card-link:hover {
        transform: translateY(-5px);
    }

    .card-img {
        width: 80px;
        height: auto;
        display: block;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
    }

    .system-brand {
        text-align: center;
    }

    .system-brand h1 {
        font-size: 1.2rem;
        letter-spacing: 8px;
        color: #333;
        margin: 0;
    }

    .line {
        height: 2px;
        background: linear-gradient(90deg, transparent, #333, transparent);
        margin-top: 5px;
    }
</style>