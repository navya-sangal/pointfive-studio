import { site } from "@/content/site";

/**
 * The little illustrated "business" inside the hero lens: an Instagram post in the middle,
 * surrounded by the website, booking screen, WhatsApp chat and owner dashboard.
 * Drawn with HTML and CSS (styles in globals.css under "Hero lens"), so there are no images to load.
 */
export function LensScene() {
  const s = site.lens.scene;
  return (
    <>
      <div className="lc lc-web">
        <div className="lw-bar">
          <i />
          <i />
          <i />
          <span>{s.website.url}</span>
        </div>
        <div className="lw-body">
          <div>
            <b className="lw-brand">{s.website.brand}</b>
            <p className="lw-h">{s.website.headline}</p>
            <span className="lw-btn">{s.website.button}</span>
          </div>
          <div className="lw-img" />
        </div>
      </div>

      <div className="lc lc-book">
        <b>{s.booking.title}</b>
        <p className="lb-d">{s.booking.day}</p>
        <div className="lb-slots">
          {s.booking.slots.map((slot) => (
            <span key={slot} className={slot === s.booking.picked ? "on" : undefined}>
              {slot}
            </span>
          ))}
        </div>
        <p className="lb-ok">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5l10 -10" />
          </svg>
          {s.booking.confirm}
        </p>
      </div>

      <div className="lc lc-chat">
        <div className="lch-head">
          <span className="lch-av">K</span>
          <div>
            <b>{s.chat.name}</b>
            <small>{s.chat.status}</small>
          </div>
        </div>
        <div className="lch-body">
          <p>{s.chat.incoming}</p>
          <p className="out">
            {s.chat.reply}
            <small>{s.chat.time}</small>
          </p>
        </div>
      </div>

      <div className="lc lc-dash">
        <small>{s.dashboard.title}</small>
        <p className="ld-n">
          {s.dashboard.stat}
          <small>{s.dashboard.statLabel}</small>
        </p>
        <div className="ld-bars">
          {s.dashboard.bars.map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="ld-days">
          {s.dashboard.days.split(" ").map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </p>
      </div>

      <div className="lc lc-insta">
        <div className="li-head">
          <span className="li-avatar">K</span>
          <div>
            <b>{s.insta.handle}</b>
            <small>{s.insta.place}</small>
          </div>
        </div>
        <div className="li-photo" />
        <div className="li-meta">
          <div className="li-icons">
            <svg viewBox="0 0 24 24" fill="#e0245e" stroke="#e0245e" strokeWidth="1.5">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
          </div>
          <b>{s.insta.likes}</b>
          <p>
            <b>{s.insta.handle}</b> {s.insta.caption}
          </p>
        </div>
      </div>
    </>
  );
}
