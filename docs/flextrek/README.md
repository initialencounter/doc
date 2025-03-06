# Flextrek

## Description

A super-easy, windows-only crate to get focused explorer location or selected files path using hotkey!

## Usage

### Get selected files

[example/get_explorer_selected_file.rs](example/get_explorer_selected_file.rs)

```Rust
use flextrek::listen_selected_files;
fn main() {
    let hotkey_str = "Ctrl+Shift+z";
    println!("Start to listen explorer selected files");
    println!("Hotkey: {}", hotkey_str);
    let handle = listen_selected_files(hotkey_str.to_string(), |files| async move {
        println!("Selected files: {:?}", files);
    });
    println!("10 seconds later, unregister");
    std::thread::sleep(std::time::Duration::from_secs(10));
    println!("Unregister");
    handle.unregister();
    loop {
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
}
```

### Get focused explorer location

[example/get_explorer_location.rs](example/get_explorer_location.rs)

```Rust
use flextrek::listen_path;
fn main() {
    let hotkey_str = "Ctrl+Shift+z";
    println!("Start to listen explorer location");
    println!("Hotkey: {}", hotkey_str);
    let handle = listen_path(hotkey_str.to_string(), |path| move {
        println!("Current path: {:?}", path);
    });
    println!("10 seconds later, unregister");
    std::thread::sleep(std::time::Duration::from_secs(10));
    println!("Unregister");
    handle.unregister();
    loop {
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
}
```

## CHANGELOG

- v0.2.1: remove async from listen_path and listen_selected_files
- v0.2.0: add unregister method
- v0.1.1: replace hotkey_str type from &str to String