<footer>
    <div class="status">
        <span class="dot"></span>
        SYSTEM_READY
    </div>
    <div class="clock">
        LOCAL_TIME: {new Date().toLocaleTimeString()}
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        padding: 10px 40px;
        background: #050505;
        border-top: 1px solid #222;
        color: #444;
        font-family: monospace;
        font-size: 0.7rem;
    }

    .dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #0f0; /* Green "Power" light */
        border-radius: 50%;
        margin-right: 10px;
        box-shadow: 0 0 5px #0f0;
    }
</style>