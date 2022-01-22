push-dev:
	set AWS_PROFILE=codeforkorea-memorial
	./gradlew clean :buildNeeded :jib -Djib.to.image="823958129382.dkr.ecr.ap-northeast-2.amazonaws.com/memorial-server-hall" -Djib.to.credHelper="ecr-login"
