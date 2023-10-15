FROM openjdk:17-jdk-alpine
# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR f1le into the container at /app
COPY target/BuildFlow-0.0.1-SNAPSHOT.jar /app
# Expose the port the app runs on
EXPOSE 8080
# Define the command to run your application
CMD ("Java","-jar","BuildFlow-0.0.1-SNAPSHOT.jar")