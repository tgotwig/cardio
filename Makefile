test:
	make test-elixir
	make test-java
	make test-javascript
	make test-python

test-elixir:
	@echo "────────────────────────────"
	@echo "🧪 Run Elixir tests"
	@echo "────────────────────────────"
	cd elixir-cardio && make test

test-java:
	@echo "────────────────────────────"
	@echo "☕️ Run Java tests"
	@echo "────────────────────────────"
	cd java-cardio && make test

test-javascript:
	@echo "────────────────────────────"
	@echo "🟢 Run Javascript tests"
	@echo "────────────────────────────"
	cd javascript-cardio && npm test

test-python:
	@echo "────────────────────────────"
	@echo "☕️ Run Python tests"
	@echo "────────────────────────────"
	cd events/adventofcode && ./test.sh

sort:
	sort -o .gitignore .gitignore
