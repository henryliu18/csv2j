# Build
```docker build . -t henryhhl18/csv2j```

# Run
```docker run --rm -d -p 3000:3000 henryhhl18/csv2j```

# Upload csv file
```
POST
http://host:3000/api/csv2j/upload
form-data
- myfile: [example.csv]
```

# Get Json string
```
GET
http://host:3000/api/csv2j/example.csv
```
