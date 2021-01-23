test:
	make test-elixir
	make test-java

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

sort:
	sort -o .gitignore .gitignore
