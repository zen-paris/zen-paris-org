import yaml
from datetime import datetime

INPUT_FILE = "events.yaml"

def load_events(filename):
    with open(filename, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

def save_events(filename, events):
    with open(filename, "w", encoding="utf-8") as f:
        yaml.dump(events, f, allow_unicode=True, sort_keys=False)

def parse_date(event):
    # Ensure consistent parsing even if "date" is missing or malformed
    try:
        return datetime.strptime(str(event.get("date")), "%Y-%m-%d")
    except Exception:
        return datetime.min  # fallback so invalid/missing dates go last

def main():
    events = load_events(INPUT_FILE)

    # Sort by 'date' field, reverse chronological order
    events_sorted = sorted(events, key=parse_date, reverse=True)

    save_events(INPUT_FILE, events_sorted)
    print(f"Reordered {len(events)} events in reverse chronological order.")

if __name__ == "__main__":
    main()
