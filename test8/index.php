<?php

interface Singleton {
    public static function getInstance();
}

interface FactoryMethod {
    public function create();
}

// implement Singleton
class Logger implements Singleton {
    private static $instance;

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Logger();
        }

        return self::$instance;
    }

    public function log($message) {
        echo "Logging message: $message";
    }
}

// implement FactoryMethod
class LoggerFactory implements FactoryMethod {
    public function create() {
        return Logger::getInstance();
    }
}

$logger = LoggerFactory::create();
$logger->log("This is a log message."); // result is Logging message: This is a log message.