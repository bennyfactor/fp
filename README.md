README

to run php locally in development mode:

```
php -S localhost:8000 -t .
```

to run compass locally in developent mode:

```
compass watch -c config.rb
```
in a different tab. Or something.

When the styles look good and you're ready to make them for a prod bundle:

```
compass clean && compass compile -e production -c config.rb
```